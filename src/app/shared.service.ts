import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
Mydate = new Date()
  constructor(private http:HttpClient) { }
  private headers = new HttpHeaders({'Content-Type':'application/json'})

fetchData(){
  return this.http.get('http://dummy.restapiexample.com/api/v1/employees')
}
jsondata(){
  return this.http.get('http://dummy.restapiexample.com/api/v1/create')
}

}
