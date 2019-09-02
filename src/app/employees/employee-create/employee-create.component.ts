import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Department } from 'src/app/shared/models/departement.model';
import { EmployeesService } from 'src/app/shared/services/employees.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared/models/employee.model';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss']
})
export class EmployeeCreateComponent implements OnInit {
  employee: Employee;
  employeeId: number;
  title = 'ADD EMPLOYEE';

  dateOfBirth: Date = new Date(2019, 0, 30);
  datePickerConfig: Partial<BsDatepickerModule>;
  employeeForm: FormGroup;

  departments: Department[] = [
    { id: 'HR', name: 'HR' },
    { id: 'IT', name: 'IT' },
    { id: 'Admin', name: 'Admin' }
  ];

  formSubmitAttempt = false;

  constructor(private employeeService: EmployeesService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder) {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY',
      });

      this.employeeForm = this.buildForm(this.formBuilder);
  }

  ngOnInit() {
    if (this.route.snapshot.params.employeeId) {
      this.title = 'EDIT EMPLOYEE';
      this.employeeId = parseInt(this.route.snapshot.params['employeeId']);

      this.employee = this.employeeService.get(this.employeeId);
      this.employeeForm.patchValue(this.employee);
    }
  }

  hasError = (field: string, errorName: string): boolean =>
    this.employeeForm.get(field).errors ? this.employeeForm.get(field).errors[errorName] : false;

  isFieldValid = (field: string): boolean =>
    this.employeeForm.get(field).invalid && (this.formSubmitAttempt || this.employeeForm.get(field).touched)

  buildForm(FormBuilder: FormBuilder): FormGroup {
    return FormBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      mobileNo: ['', [Validators.required, Validators.maxLength(10)]],
      gender: ['female', [Validators.required]],
      department: ['HR', [Validators.required]],
      dob: ['', [Validators.required]]
    });
  }

  onSubmit() {

    this.formSubmitAttempt = true;

    if(this.employeeForm.invalid){
      return;
    }

    if (this.route.snapshot.params.employeeId) {
      this.employeeService.update(this.employeeId, this.employeeForm.value);
    } else {
      this.employeeService.save(this.employeeForm.value);
    }

    this.router.navigate(['/employees']);
  }

}
