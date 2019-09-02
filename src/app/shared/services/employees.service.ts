import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  employeeList : Employee[] = [
    {
      id: 1,
      fullName: 'Prachi Kshirsagar',
      email: 'prachi@gmail.com',
      mobileNo: 2564389752,
      gender: 'female',
      department: 'IT',
      dob: new Date('09/19/1992'),
      isActive: true
    },
    {
      id: 2,
      fullName: 'Pooja Kshirsagar',
      email: 'pooja@gmail.com',
      mobileNo: 2564389752,
      gender: 'female',
      department: 'Admin',
      dob: new Date('10/03/1992'),
      isActive: true
    }
  ]

  constructor() { }

  getAll(){
    return this.employeeList;
  }

  save(employee:Employee){
    employee.id = this.employeeList.length + 1;
    employee.isActive = true;

    this.employeeList.push(employee);
  }

  update(id:number, employee:Employee){
    const index = this.employeeList.findIndex(x => x.id === id);

    employee.id = id;

    this.employeeList[index] = employee;
  }

  delete(employee:Employee){
    const index = this.employeeList.indexOf(employee);

    if(index !== -1){
      this.employeeList.splice(index, 1);
    }
  }

  get(id:number):Employee {
    return this.employeeList.find(x =>x.id === id);
  }
}
