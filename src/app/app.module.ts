import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home.component';
import { ContactComponent } from './component/contact.component';
import { AboutComponent } from './component/about.component';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  declarations: [AppComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
