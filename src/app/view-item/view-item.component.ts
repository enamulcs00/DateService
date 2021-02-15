import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
id:any
ViewEmp:any;
  constructor(private service:SharedService,private activated:ActivatedRoute) {
    this.activated.params.subscribe((res:any)=>{
      this.id = res.id
    })
   }

  ngOnInit(): void {
    this.fetchValue()

  }
   fetchValue(){
      this.service.fetchData().subscribe((report:any)=>{
        console.log('Report',report.data)
        this.ViewEmp = report.data
        this.ViewEmp = report.data.find(element => (element.id==this.id));
       console.log('Rsult',this.ViewEmp)
        })
      }
    //   Checking(){
    //   [{id: 1, employee_name: "Tiger Nixon", employee_salary: 320800, employee_age: 61, profile_image: ""},…];

    // }
}
