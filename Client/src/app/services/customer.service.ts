import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICustomer } from '../models/ICustomer';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})

export class CustomerService extends BaseService {

  customers(status?: boolean) {
    return this.http.get<ICustomer[]>(`${environment.apiUrl}/customer?status=${status}`, {
      headers: this.getHeaders(),
    });
  }

  customer(id: string): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${environment.apiUrl}/customer/${id}`, {
      headers: this.getHeaders(),
    });
  }

  addCustomer(customer: ICustomer) {
    return this.http.post(`${environment.apiUrl}/customer`, customer, {
      headers: this.getHeaders(),
    });
  }

  updateCustomer(id: string, customer: ICustomer) {
    return this.http.put(`${environment.apiUrl}/customer/${id}`, customer, {
      headers: this.getHeaders(),
    });
  }

  deleteCustomer(id: string) {
    return this.http.delete(`${environment.apiUrl}/customer/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
