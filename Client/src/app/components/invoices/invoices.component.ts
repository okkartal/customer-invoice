import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IInvoice } from 'src/app/models/IInvoice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent {
  constructor(public api: ApiService, private router: Router) { }

  gridColumns = 3;

  invoices: IInvoice[] = [];

  selectedCustomer: string;

  ngOnInit() {
    this.loadInvoices();
  }

  edit(id: string) {
    this.router.navigate(['invoice/', id]);
  }

  delete(id: string) {

    if (!confirm("Do you really want to delete this record?")) {
      return;
    }
    this.api.deleteInvoice(id)
      .subscribe(() => this.loadInvoices());
  }

  customerChange($event: any) {
    this.selectedCustomer = $event;
    this.loadInvoices();
  }

  loadInvoices() {
    this.api.invoices(this.selectedCustomer)
      .subscribe((data) => this.invoices = data);
  }
} 
