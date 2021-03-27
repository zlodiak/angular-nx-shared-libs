import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModule } from '@first/ui';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';

@NgModule({
  declarations: [AppComponent, Page1Component],
  imports: [BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
