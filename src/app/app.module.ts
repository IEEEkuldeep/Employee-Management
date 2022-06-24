import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { CompnayInfoComponent } from './compnay-info/compnay-info.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule } from '@angular/forms';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SubHeaderComponent,
    CompnayInfoComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    EditDetailsComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    FormsModule,
    MaterialModule,
    RouterModule,
    MatDialogModule,
    MatSelectModule,
    // MatInputModule,
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
