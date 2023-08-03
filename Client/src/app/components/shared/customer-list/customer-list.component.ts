import { Component, EventEmitter, Output } from '@angular/core';
import { ICustomer } from 'src/app/models/ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {

  constructor(private api: CustomerService) { }

  editCustomerId: string = '';

  @Output() selectedCustomerEvent = new EventEmitter<string>();

  customers: ICustomer[] = [];

  ngOnInit(): void {
    this.api.customers().subscribe((data) => this.customers = data);
  }

  customerChangeAction(value: string) {
    this.selectedCustomerEvent.emit(value);
  }
}
