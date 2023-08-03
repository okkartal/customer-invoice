import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { IInvoice } from 'src/app/models/IInvoice';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-invoices',
  templateUrl: './edit-invoices.component.html',
  styles: [`
  .form-element {
  width: 500px;
}
.edit-invoice-container {
  padding: 20px;
}

  `] 
})
export class EditInvoicesComponent {
  invoiceForm: IInvoice = {
    id: '0',
    customerId: '',
    description : '',
    quantity: 0,
    price: 0,
    discount: 0,
    total: 0,
    grandTotal: 0,
    isPaid: false,
    created: new Date()
  };
   

  constructor(public api : ApiService,private route: ActivatedRoute, private router: Router) {} 

  selectedCustomer: string;

  ngOnInit(){
    var id = this.route.snapshot.params['id'] ?? '0'; 
    if(id !== '0') {
      this.getById(id);
    }
     
  }

  getById(id:string) {
    this.api.invoice(id).subscribe((data) => this.invoiceForm = data);
    this.selectedCustomer = this.invoiceForm.customerId;
  }

  update(){ 
    this.invoiceForm.customerId = this.selectedCustomer;
    
    if(this.validate()){
      this.api.updateInvoice(this.invoiceForm.id, this.invoiceForm)
      .subscribe(() => this.router.navigate(['invoices'])); 
    }
    
  }

  add(){ 
    this.invoiceForm.customerId = this.selectedCustomer
    this.invoiceForm.id =  Guid.create().toString(); 
  
    if(this.validate()){
      this.api.addInvoice(this.invoiceForm)
      .subscribe(() => this.router.navigate(['invoices'])); 
    }
  }

  customerChange($event:any) {
    this.selectedCustomer = $event; 
   }

   validate(){
    console.log(this.invoiceForm.customerId);
    if(this.selectedCustomer === '' || this.selectedCustomer === undefined) {
      alert("Please select a customer");
      return false;
    }
    return true;
   }

   calculateTotal() {
    this.invoiceForm.total = this.invoiceForm.quantity * this.invoiceForm.price;
   }

   calculateGrandTotal(){ 
     this.invoiceForm.grandTotal = (this.invoiceForm.total - ((this.invoiceForm.total * this.invoiceForm.discount) / 100));
   }
}
