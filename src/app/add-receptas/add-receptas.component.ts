import {Component, OnInit} from '@angular/core';
import {ProduktasService} from "../service/produktas-service";
import {ReceptaiService} from "../service/receptai-service";
import {ProduktasView} from "../model/produktas-view";
import {ReceptasCreateView} from "../model/receptas-create-view";
import {StorageService} from "../service/storage-service";

@Component({
  selector: 'app-add-receptas',
  templateUrl: './add-receptas.component.html',
  styleUrls: ['./add-receptas.component.scss']
})
export class AddReceptasComponent implements OnInit {

  produktai: ProduktasView[] = [];

  produktaiNames: string[] = [];

  selectedProduktai: string[] = [];

  selectedProduktas: number = 0;

  error : string = "";

  timesPerWeek: number[] = [0, 1, 2, 3, 4, 5, 6];

  receptasCreateView: ReceptasCreateView = {
    asmuoId: 0,
    aprasymas: "",
    pavadinimas: "",
    produktaiIds: []
  }

  constructor(private produktasService: ProduktasService, private receptasService: ReceptaiService, private storageService: StorageService) {
  }

  ngOnInit() {
    this.produktasService.getProduktai().subscribe(produktai => {
      this.produktai = produktai;
      this.produktaiNames = produktai.map(a => a.pavadinimas);
    })
  }

  onProduktasSubmit(event: any) {
    if (this.selectedProduktas === 0) {
      return;
    }
    if (this.receptasCreateView.produktaiIds.includes(this.selectedProduktas)) {
      return;
    }
    this.receptasCreateView.produktaiIds.push(this.selectedProduktas);
    this.selectedProduktai.push(<string>this.produktai.find(p => p.id == this.selectedProduktas)?.pavadinimas);
  }

  onProduktasReset(event: any) {
    this.receptasCreateView.produktaiIds = [];
    this.selectedProduktai = [];
  }

  onSubmit() {
    this.receptasCreateView.asmuoId = this.storageService.getUserId();
    this.receptasService.createReceptas(this.receptasCreateView).subscribe({
      next: data => {},
      error: err => {
        console.log(err.error);
        this.error = err;
      }
    })
  }

}
