import { SharedService } from './shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
date:any;
  constructor(private service:SharedService){
    this.date=this.service.Mydate;
  }
}
