import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompnayInfoComponent } from './compnay-info/compnay-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path:'info',component:CompnayInfoComponent
  },
  {
    path:'add',component:AddEmployeeComponent
  },
  {
    path:'details',component:EmployeeDetailsComponent,
  },
  // {
  //   path:'details',component:EmployeeDetailsComponent, children:[
  //     {
  //       path:'edit/:id',component:EditDetailsComponent
  //     },
  //     {
  //       path:':id/:name',component:EditDetailsComponent
  //     },
  //   ]
  // },
  {
    path:'details/edit/:id',component:EditDetailsComponent
  },
  {
    path:'details/:id/:name',component:EditDetailsComponent
  },

  // {
  //   path:'notfound', component:NotfoundComponent
  // },
  // {
  //   path:'**', redirectTo:'/notfound'
  // },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
