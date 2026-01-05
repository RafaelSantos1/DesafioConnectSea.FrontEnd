import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ManifestoEscala } from "../models/manifesto-escala.model";

@Injectable({
  providedIn: 'root'
})

export class ManifestoEscalaServico{
  private apiUrl = 'https://localhost:44348/manifestoescala';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  post(obj:ManifestoEscala): Observable<any> {
    return this.http.post(this.apiUrl, obj);
  }
}