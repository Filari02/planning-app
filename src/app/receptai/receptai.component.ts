import {Component, OnInit} from '@angular/core';
import {ReceptaiService} from "../service/receptai-service";
import {StorageService} from "../service/storage-service";
import {BehaviorSubject} from "rxjs";
import {AuthService} from "../service/auth-service";

@Component({
  selector: 'app-receptai',
  templateUrl: './receptai.component.html',
  styleUrls: ['./receptai.component.scss']
})
export class ReceptaiComponent implements OnInit{

  isLoggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private storageService: StorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isLoggedIn.next(this.storageService.isLoggedIn());
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.storageService.clean();
        this.isLoggedIn.next(false);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
