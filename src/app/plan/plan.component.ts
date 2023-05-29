import {Component, OnInit} from '@angular/core';
import {ReceptaiService} from "../service/receptai-service";
import {RibojimasView} from "../model/ribojimas-view";
import {StorageService} from "../service/storage-service";
import {ReceptasView} from "../model/receptas-view";
import {ProduktasService} from "../service/produktas-service";
import {ProduktasView} from "../model/produktas-view";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit{

  ribojimai : RibojimasView[] = [];

  receptai: ReceptasView[] = [];

  produktai: ProduktasView[] = [];

  selectedProduktai: {pavadinimas: string; kartai: number }[] = [];

  ribojimas: RibojimasView = {
    produktasId: 0,
    timesPerWeek: 7,
  }

  timesPerWeek: number[] = [0, 1, 2, 3, 4, 5, 6];

  searchPerformed: boolean = false;

  constructor(private receptasService: ReceptaiService, private storageService: StorageService, private produktasService: ProduktasService) {
  }

  ngOnInit(): void {
    this.produktasService.getProduktai().subscribe(produktai => {
      this.produktai = produktai;
    })
  }


  onProduktasSubmit(event: any) {
    if (this.ribojimas.produktasId === 0) {
      return;
    }
    let r : RibojimasView = {
      produktasId: this.ribojimas.produktasId,
      timesPerWeek: this.ribojimas.timesPerWeek,
    }

    this.ribojimai.push(r);
    const selectedProduktas = {pavadinimas: <string>this.produktai.find(p => p.id == this.ribojimas.produktasId)?.pavadinimas, kartai: this.ribojimas.timesPerWeek};
    this.selectedProduktai.push(selectedProduktas);
    console.log(this.ribojimai)

  }

  onProduktasReset(event: any) {
    this.ribojimai = [];
    this.selectedProduktai = [];
  }



  onSubmit() {
    this.receptasService.planForAWeek(this.ribojimai, this.storageService.getUserId()).subscribe(receptai => {
      this.receptai = receptai;
      this.searchPerformed = true;
    })
  }


}
