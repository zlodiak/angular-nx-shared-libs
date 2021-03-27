import { Component, OnInit } from '@angular/core';
import {
  EmployeesService,
  employeeType,
} from '../../services/employees.service';

@Component({
  selector: 'first-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {
  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {}

  create(employee: employeeType) {
    this.employeesService.addEmployees(employee);
  }
}
