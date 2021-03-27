import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { DisplayJsonComponent } from './components/display-json/display-json.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeFormComponent, DisplayJsonComponent],
  exports: [EmployeeFormComponent, DisplayJsonComponent],
})
export class UiModule {}
