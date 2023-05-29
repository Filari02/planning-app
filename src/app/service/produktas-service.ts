import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceptasView} from "../model/receptas-view";
import {ProduktasView} from "../model/produktas-view";

@Injectable({
  providedIn: 'root'
})
export class ProduktasService {
  private PRODUKTAS_SERVER = "http://localhost:8080/produktas";

  constructor(private httpClient: HttpClient) {
  }

  public getProduktai(): Observable<ProduktasView[]> {
    return this.httpClient.get<ProduktasView[]>(this.PRODUKTAS_SERVER);
  }
}
