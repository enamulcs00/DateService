
import { SharedService } from './../shared.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Employees } from '../employees';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit{
  ELEMENT_DATA : Employees[];

  displayedColumns: string[] = ['id','employee_name', 'employee_age', 'employee_salary'];
  dataSource = new MatTableDataSource<Employees>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private service:SharedService) {}
ngOnInit(){
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  this.fetchValue()

}
fetchValue(){
  this.service.fetchData().subscribe((report:any)=>{
    console.log('Report',report.data)
    this.dataSource.data=report.data  as Employees[]
  })

}
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  }



