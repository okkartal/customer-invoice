import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/models/ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [`table {  width: 80%;  }
   
  .allCustomers-container {  padding: 20px;  }`
  ]
})
export class CustomersComponent implements OnInit {

  allCustomersSource: ICustomer[] = [];

  displayedColumns: string[] = ['name', 'address', 'phone', 'creationDate', 'lastModifiedDate', 'id', 'status'];

  constructor(private api: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.api.customers().subscribe((data) => {
      this.allCustomersSource = data;
    });
  }

  delete(id: string) {
    if (!confirm("Do you really want to delete this record?")) {
      return;
    }
    this.api.deleteCustomer(id)
      .subscribe(() => this.get());
  }
}
