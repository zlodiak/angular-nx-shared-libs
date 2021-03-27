import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '@first/ui';
import { employeeType } from '@first/data';

@Component({
  selector: 'first-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  employees: employeeType[];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.employees;
  }

  create(employee: employeeType) {
    this.employeesService.addEmployees(employee);
  }
}
