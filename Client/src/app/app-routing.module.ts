import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { EditInvoicesComponent } from './components/edit-invoices/edit-invoices.component';
import { InvoicesComponent } from './components/invoices/invoices.component';

const routes = [
  { path :'', component: CustomersComponent},
  { path :'customers', component: CustomersComponent},
  { path :'customer', component: EditCustomerComponent}, 
  { path :'customer/:id', component: EditCustomerComponent}, 
  { path :'invoices', component: InvoicesComponent},
  { path :'invoices/:id', component: EditInvoicesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
