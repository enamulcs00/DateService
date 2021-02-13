import { ViewItemComponent } from './view-item/view-item.component';
import { DataTableComponent } from './data-table/data-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'',redirectTo:'table',pathMatch:'full'},
  {path:'table',component:DataTableComponent},
  {path:'view/:id',component:ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
