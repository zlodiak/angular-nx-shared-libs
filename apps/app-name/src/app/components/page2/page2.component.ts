import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '@first/ui';
import { employeeType } from '@first/data';

@Component({
  selector: 'first-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  employees: employeeType[];

  constructor(private employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employees = this.employeesService.employees;
    // this.employeesService.employeesStream.subscribe((employees: any) => {
    //   console.log(this.employees);
    //   this.employees = employees;
    // });
  }
}
