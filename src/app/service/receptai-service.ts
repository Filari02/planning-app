import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReceptasView} from "../model/receptas-view";
import {Injectable} from "@angular/core";
import {ReceptasCreateView} from "../model/receptas-create-view";
import {RibojimasView} from "../model/ribojimas-view";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ReceptaiService {
  private RECEPTAI_SERVER = "http://localhost:8080/receptas";

  constructor(private httpClient: HttpClient) {
  }

  public getAsmuoReceptai(id: number): Observable<ReceptasView[]> {
    return this.httpClient.get<ReceptasView[]>(this.RECEPTAI_SERVER + '/asmuo-receptai/' + id);
  }

  public createReceptas(receptasCreateView: ReceptasCreateView): Observable<any> {
    return this.httpClient.post(this.RECEPTAI_SERVER, JSON.stringify(receptasCreateView), httpOptions);
  }

  public planForAWeek(ribojimai : RibojimasView[], asmuoId: number): Observable<ReceptasView[]> {
    return this.httpClient.post<ReceptasView[]>(this.RECEPTAI_SERVER + "/plan/" + asmuoId, JSON.stringify(ribojimai), httpOptions);
  }

}
