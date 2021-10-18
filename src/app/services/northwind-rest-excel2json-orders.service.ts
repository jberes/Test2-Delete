import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NorthwindRESTExcel2JsonOrdersService {
  constructor(private http: HttpClient) { }

  public getOrders(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/05155b3096a74a66a36697a59276b969`);
  }
}
