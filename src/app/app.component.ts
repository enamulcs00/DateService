import { SharedService } from './shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service:SharedService){

  }
  ngOnInit() {
//this.fetchValue()

  }

  fetchValue(){
    this.service.fetchData().subscribe((res:any)=>{
      console.log('This is Fetch',res)
    })
  }
  }


