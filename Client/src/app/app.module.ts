import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import {  MatTableModule } from '@angular/material/table'; 
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { EditInvoicesComponent } from './components/edit-invoices/edit-invoices.component';
import { CustomerListComponent } from './components/shared/customer-list/customer-list.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CustomersComponent,
    EditCustomerComponent,
    InvoicesComponent,
    EditInvoicesComponent,
    CustomerListComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatListModule,  MatTableModule, MatSelectModule, MatCheckboxModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
