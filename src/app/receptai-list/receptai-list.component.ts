import {Component, OnInit} from '@angular/core';
import {ReceptaiService} from "../service/receptai-service";
import {ReceptasView} from "../model/receptas-view";
import {StorageService} from "../service/storage-service";

@Component({
  selector: 'app-receptai-list',
  templateUrl: './receptai-list.component.html',
  styleUrls: ['./receptai-list.component.scss']
})
export class ReceptaiListComponent implements OnInit {

  receptai: ReceptasView[] = [];

  constructor(private receptaiServcice: ReceptaiService, private storageService: StorageService) {
  }

  ngOnInit() {
    this.receptaiServcice.getAsmuoReceptai(this.storageService.getUser()['id']).subscribe(receptai => {
      this.receptai = receptai;
    })
  }

}

