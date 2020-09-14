import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  // private infoUrl = 'https://search-crm-db-mfqrc3ewdrin3m5bil435svt5i.ca-central-1.es.amazonaws.com/clients/_search?q=*&pretty=true';
  private infoUrl = 'http://localhost:10010';
  constructor(private http: HttpClient) { }

  // header = new HttpHeaders().set("content")

  public getInfo(): Observable<any>{
    return this.http.get(this.infoUrl);
  }
}
