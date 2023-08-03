import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ICustomer } from '../models/ICustomer';
import { Observable } from 'rxjs';
import { IInvoice } from '../models/IInvoice';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders() 
      .set('Content-Type', 'application/json');
    return headers;
  }

  customers() {
    return this.http.get<ICustomer[]>(`${environment.apiUrl}/customer`);
  } 

  customer(id:string) : Observable<ICustomer>{
    return this.http.get<ICustomer>(`${environment.apiUrl}/customer/${id}`);
  } 

  addCustomer(customer : ICustomer) {
    return this.http.post(`${environment.apiUrl}/customer`, customer,  {
      headers: this.getHeaders(),
    });
  }

  updateCustomer(id: string,customer : ICustomer) {
    return this.http.put(`${environment.apiUrl}/customer/${id}`, customer,  {
      headers: this.getHeaders(),
    });
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${environment.apiUrl}/customer/${id}`);
  }

  invoices(customerId: string) {
    return this.http.get<IInvoice[]>(`${environment.apiUrl}/invoice/invoices/${customerId}`);
  } 

  invoice(id:string) : Observable<IInvoice>{
    return this.http.get<IInvoice>(`${environment.apiUrl}/invoice/${id}`);
  } 

  addInvoice(invoice : IInvoice) {
    return this.http.post(`${environment.apiUrl}/invoice`, invoice,  {
      headers: this.getHeaders(),
    });
  }

  updateInvoice(id: string,invoice : IInvoice) {
    return this.http.put(`${environment.apiUrl}/invoice/${id}`, invoice,  {
      headers: this.getHeaders(),
    });
  }

  deleteInvoice(id: string) {
    return this.http.delete(`${environment.apiUrl}/invoice/${id}`);
  }
  
}
