import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.jsonData()
  }
  jsonData(){
    this.service.jsondata().subscribe((res:any)=>{
      console.log('Response',res)
    })

    }
}
