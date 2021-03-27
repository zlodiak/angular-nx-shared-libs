import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { employeeType } from '@first/data';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: employeeType[] = [];
  employeesStream = new BehaviorSubject<employeeType[]>([]);

  constructor() {}

  addEmployees(employee: employeeType) {
    this.employees.push(employee);
    this.employeesStream.next(this.employees);
  }
}
