import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeesService } from 'src/app/shared/services/employees.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.scss']
})
export class EmployeeViewComponent implements OnInit {
  employees : Array<Employee>;
  
  constructor(private employeeService : EmployeesService) {
    this.employees = this.employeeService.getAll();
   }

  ngOnInit() {
  }

  onDisplay(employee: Employee) {
    employee = this.employees.find(x => x.id == employee.id);
  }

  onDelete(employee:Employee){
    this.employeeService.delete(employee);
  }

}
