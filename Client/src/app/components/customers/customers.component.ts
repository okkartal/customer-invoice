import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ICustomer } from 'src/app/models/ICustomer';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles:[`table {  width: 80%;  }
   
  .allCustomers-container {  padding: 20px;  }`
]
})
export class CustomersComponent implements OnInit {
  allCustomersSource: ICustomer[] = [];
  displayedColumns: string[] = ['name', 'address', 'phone', 'created', 'id'];
 

  constructor(public api : ApiService, private router: Router) {} 

  ngOnInit(): void {
    this.get();
  }
 
  get() {
    this.api.customers().subscribe((data) => {
      this.allCustomersSource = data;
    });
  }

  
  
  delete(id: string) {
    
    if(!confirm("Do you really want to delete this record?")) {
      return ;
    }
    this.api.deleteCustomer(id)
    .subscribe(() => this.router.navigate(['customers']));
   }
}
