import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/models/ICustomer';
import { IInvoice } from 'src/app/models/IInvoice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html' 
})
export class InvoicesComponent {
  constructor(public api : ApiService, private router: Router) {} 
  
  invoices: IInvoice[] = [];
  customers: ICustomer[] = [];
  customer: string;
  
  ngOnInit(): void {
    this.api.customers().subscribe((data) => this.customers = data);
  } 

  
  
  delete(id: string) {
    
    if(!confirm("Do you really want to delete this record?")) {
      return ;
    }
    this.api.deleteInvoice(id)
    .subscribe(() => this.router.navigate(['invoices']));
   }

   customerChangeAction(customer: string) {}
    
} 
