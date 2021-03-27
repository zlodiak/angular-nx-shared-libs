import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '@first/ui';
import { employeeType } from '@first/data';

@Component({
  selector: 'first-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  employees: employeeType[];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.employees;
  }

  create(employee: employeeType) {
    this.employeesService.addEmployees(employee);
  }
}
