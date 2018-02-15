import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeService } from './components/shared/employee.service';

import { RouterModule } from '@angular/router';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      EmployeeListComponent,
   ],
   imports: [
      BrowserModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forRoot([
        { path: "", redirectTo: "list", pathMatch: 'full' },
        { path: "list", component: EmployeeListComponent, pathMatch: 'full' },
        { path: "list/add", component: EmployeeComponent, pathMatch: 'full' },
        { path: "list/edit/:empId", component: EmployeeComponent, pathMatch: 'full' },     
      ]),
    ],
   providers: [EmployeeService],
   bootstrap: [AppComponent]
})

export class AppModule { } 