import { Component, Input, OnInit } from '@angular/core';
import { employeeType } from '@first/data';

@Component({
  selector: 'first-display-json',
  templateUrl: './display-json.component.html',
  styleUrls: ['./display-json.component.scss'],
})
export class DisplayJsonComponent implements OnInit {
  @Input() data: employeeType;

  constructor() {}

  ngOnInit(): void {}
}
