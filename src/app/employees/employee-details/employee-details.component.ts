import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/models/employee.model';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  employee : Employee;

  constructor(private employeeService:EmployeesService, private route:ActivatedRoute) {
    const employeeId = parseInt(this.route.snapshot.params['employeeId']);
    this.employee = this.employeeService.get(employeeId);
   }

  ngOnInit() {
  }

}
