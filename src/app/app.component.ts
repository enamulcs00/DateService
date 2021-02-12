import { SharedService } from './shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
jsonData:any;
SeatBox:any = []
s1:boolean = false
s2:boolean = false
s3:boolean = false
s4:boolean = false
s5:boolean = false
s6:boolean = false
s7:boolean = false
  constructor(private service:SharedService){

  }
  ngOnInit() {
this.fetchValue()
this.getApiData()
  }

  getApiData(){
    this.service.getData().subscribe((res:any)=>{
      this.jsonData = res
console.log(res)

    })
  }
  BookSeat(seat,status){
if(this.SeatBox.length<7){
  this.SeatBox.push(seat)
  if(status=='s1'){
    this.s1 = true
  }
  else if(status=='s2'){
    this.s2 = true
  }
  else if(status=='s3'){
    this.s3 = true
  }
  else if(status=='s4'){
    this.s4 = true
  }
  else if(status=='s5'){
    this.s5 = true
  }
  else if(status=='s6'){
    this.s6 = true
  }
  else if(status=='s7'){
    this.s7 = true
  }
}
  }
  fetchValue(){
    this.service.fetchData().subscribe((res:any)=>{
      console.log('This is Fetch',res)
    })
  }
  }


