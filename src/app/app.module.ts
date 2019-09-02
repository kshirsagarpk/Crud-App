import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './employees/employee-create/employee-create.component';
import { EmployeeViewComponent } from './employees/employee-view/employee-view.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeViewComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
