import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EmployeeFormComponent],
  exports: [EmployeeFormComponent],
})
export class UiModule {}
