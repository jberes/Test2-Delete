import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NorthwindRESTCustomersService {
  constructor(private http: HttpClient) { }

  public getTable1(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/de91435ece444635a9768cc507d82cd4`);
  }
}
