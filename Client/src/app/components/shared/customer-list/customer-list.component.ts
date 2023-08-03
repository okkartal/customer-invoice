import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICustomer } from 'src/app/models/ICustomer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {

  constructor(public api: ApiService) { }

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
