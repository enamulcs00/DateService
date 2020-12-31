import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
Mydate = new Date()
  constructor() { }
}
