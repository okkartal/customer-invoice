import { Component, Input } from '@angular/core';
import { Router } from '@angular/router'; 
import { IInvoice } from 'src/app/models/IInvoice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styles:[`table {  width: 80%;  }
   
  .allInvoices-container {  padding: 20px;  }`
]
})
export class InvoicesComponent {
  constructor(public api : ApiService, private router: Router) {} 
  
  invoices: IInvoice[] = []; 
  selectedCustomer: string;
  
  edit(id: string) {
    this.router.navigate(['invoice/',id]);
  }
  
  delete(id: string) {
    
    if(!confirm("Do you really want to delete this record?")) {
      return ;
    }
    this.api.deleteInvoice(id)
    .subscribe(() => this.loadInvoices());
   }

   customerChange($event:any) {
    this.selectedCustomer = $event;
    this.loadInvoices();
   } 

   loadInvoices(){
    this.api.invoices(this.selectedCustomer)
    .subscribe((data) => this.invoices = data);
   }
} 
