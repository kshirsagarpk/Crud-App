import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component:EmployeeViewComponent
  },
  { 
     path: 'employees',
     component:EmployeeViewComponent 
  },
  { 
    path:'employees/create',
    component:EmployeeCreateComponent 
  },
  {
    path:'employees/:employeeId/edit',
    component:EmployeeCreateComponent
  },
  { 
    path: 'employees/:employeeId/details', 
    component:EmployeeDetailsComponent
   },
  { path:'' , redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
