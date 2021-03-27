import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type employeeType = {
  name: string;
  pay: number;
};

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
