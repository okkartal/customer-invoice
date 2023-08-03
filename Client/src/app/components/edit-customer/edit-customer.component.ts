import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { ICustomer } from 'src/app/models/ICustomer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: [`
  .form-element {
  width: 500px;
}
.edit-customer-container {
  padding: 20px;
}
  `]
})

export class EditCustomerComponent {

  customerForm: ICustomer = {
    id: '0',
    name: '',
    address: '',
    phone: '',
    created: new Date()
  };

  constructor(public api: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var id = this.route.snapshot.params['id'] ?? '0';
    if (id !== '0') {
      this.getById(id);
    }
  }

  getById(id: string) {
    this.api.customer(id).subscribe((data) => this.customerForm = data);
  }

  update() {
    this.api.updateCustomer(this.customerForm.id, this.customerForm)
      .subscribe(() => this.router.navigate(['customers']));
  }

  add() {
    this.customerForm.id = Guid.create().toString();
    this.api.addCustomer(this.customerForm)
      .subscribe(() => this.router.navigate(['customers']));
  }
}
