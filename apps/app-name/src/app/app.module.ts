import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UiModule } from '@first/ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';

@NgModule({
  declarations: [AppComponent, Page1Component, Page2Component],
  imports: [AppRoutingModule, BrowserModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
