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

this.getApiData()
  }
Seat =  [
    {
      "id": 1,
      "S1": "Seat-1",
     // "S2": "Seat-2",
      "S3": "Seat-3",

        "S4": "Seat-4",
        "S5": "Seat-5",
        "S6": "Seat-6",
        "S7": "Seat-7",
        "seatStaus":false
      },
      {
        "id": 2,
        "S1": "Seat-8",
        "S2": "Seat-9",
        "S3": "Seat-10",

          "S4": "Seat-11",
          "S5": "Seat-12",
          "S6": "Seat-13",
          "S7": "Seat-14",
          "seatStaus":true
      },
      {
        "id": 3,
        "S1": "Seat-15",
        //"S2": "Seat-16",
        //"S3": "Seat-17",

          //"S4": "Seat-18",
          "S5": "Seat-19",
          "S6": "Seat-20",
          "S7": "Seat-21",
          "seatStaus":false
      },
      {
        "id": 4,
        "S1": "Seat-22",
        "S2": "Seat-23",
        "S3": "Seat-24",

          "S4": "Seat-25",
          "S5": "Seat-26",
          "S6": "Seat-27",
          "S7": "Seat-28",
          "seatStaus":true
      },
      {
        "id": 5,
        "S1": "Seat-29",
        "S2": "Seat-30",
        "S3": "Seat-31",

          "S4": "Seat-32",
          "S5": "Seat-33",
          "S6": "Seat-34",
          "S7": "Seat-35",
          "seatStaus":true
      },
      {
        "id": 6,
        "S1": "Seat-36",
        "S2": "Seat-37",
        "S3": "Seat-38",

          "S4": "Seat-39",
          "S5": "Seat-40",
          "S6": "Seat-41",
          "S7": "Seat-42",
          "seatStaus":true
      },
      {
        "id": 7,
       // "S1": "Seat-43",
        "S2": "Seat-44",
        "S3": "Seat-45",

          "S4": "Seat-46",
          "S5": "Seat-47",
          "S6": "Seat-48",
          "S7": "Seat-49",
          "seatStaus":false
      },
      {
        "id": 8,
        "S1": "Seat-50",
        "S2": "Seat-51",
        "S3": "Seat-52",

          "S4": "Seat-53",
          "S5": "Seat-54",
          "S6": "Seat-55",
       //   "S7": "Seat-56",
          "seatStaus":false
      },
      {
        "id": 9,
        "S1": "Seat-57",
        "S2": "Seat-58",
        "S3": "Seat-59",

          "S4": "Seat-60",
          "S5": "Seat-61",
          "S6": "Seat-62",
          "S7": "Seat-63",
          "seatStaus":true
      },
      {
        "id": 10,
        "S1": "Seat-64",
        "S2": "Seat-65",
        "S3": "Seat-66",

          "S4": "Seat-67",
          "S5": "Seat-68",
          //"S6": "Seat-69",
          "S7": "Seat-70",
          "seatStaus":false
      },
      {
        "id": 11,
        "S1": "Seat-71",
        "S2": "Seat-72",
        "S3": "Seat-73",

          "S4": "Seat-74",
          "S5": "Seat-75",
          "S6": "Seat-76",
          "S7": "Seat-77",
          "seatStaus":true
      },
      {
        "id": 12,
        "S1": "Seat-78",
        "S2": "Seat-79",
        "S3": "Seat-80",
        "seatStaus":false
      }


  ]
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
  }


