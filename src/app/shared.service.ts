import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
Mydate = new Date()
  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'})
getData(){
const url ="https://jsondata-1abaf-default-rtdb.europe-west1.firebasedatabase.app/product.json"

return this.http.get(url);
}
}
