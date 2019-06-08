import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { JSSFLoginComponent } from './components/jssf-login/jssf-login.component';

@NgModule({
  declarations: [
    AppComponent,
    JSSFLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
