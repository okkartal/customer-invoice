import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { IInvoice } from 'src/app/models/IInvoice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-invoices',
  templateUrl: './edit-invoices.component.html',
  styleUrls: ['./edit-invoices.component.css']
})
export class EditInvoicesComponent {

  invoiceForm: IInvoice = {
    id: '0',
    customerId: '',
    customerName: '',
    description: '',
    quantity: 0,
    price: 0,
    discount: 0,
    total: 0,
    grandTotal: 0,
    status: false,
    created: new Date()
  };

  constructor(public api: ApiService, private route: ActivatedRoute, private router: Router) { }
  selectedCustomer: string;
  ngOnInit() {
    var id = this.route.snapshot.params['id'];
    console.log(id);
    if (id) {
      this.getById(id);
    }
  }

  getById(id: string) {
    this.api.invoice(id).subscribe((data) => this.invoiceForm = data);
  }

  customerChange($event: any) {
    this.selectedCustomer = $event;
  }

  update() {
    this.api.updateInvoice(this.route.snapshot.params['id'], this.invoiceForm)
      .subscribe(() => this.router.navigate(['invoices']));
  }

  add() {
    if (this.selectedCustomer === undefined) {
      alert('Please select a customer');
      return;
    }

    this.invoiceForm.id = Guid.create().toString();
    this.invoiceForm.customerId = this.selectedCustomer;
    this.api.addInvoice(this.invoiceForm)
      .subscribe(() => this.router.navigate(['invoices']));
  }

  calculateTotal() {
    this.invoiceForm.total = this.invoiceForm.quantity * this.invoiceForm.price;
  }

  calculateGrandTotal() {
    this.invoiceForm.grandTotal = (this.invoiceForm.total - ((this.invoiceForm.total * this.invoiceForm.discount) / 100));
  }
}
