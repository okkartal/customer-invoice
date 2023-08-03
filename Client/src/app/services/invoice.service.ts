import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { IInvoice } from '../models/IInvoice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService extends BaseService {

  invoices(customerId: string) {
    return this.http.get<IInvoice[]>(`${environment.apiUrl}/invoice/invoices/${customerId}`, {
      headers: this.getHeaders(),
    });
  }

  invoice(id: string): Observable<IInvoice> {
    return this.http.get<IInvoice>(`${environment.apiUrl}/invoice/${id}`, {
      headers: this.getHeaders(),
    });
  }

  addInvoice(invoice: IInvoice) {
    return this.http.post(`${environment.apiUrl}/invoice`, invoice, {
      headers: this.getHeaders(),
    });
  }

  updateInvoice(id: string, invoice: IInvoice) {
    return this.http.put(`${environment.apiUrl}/invoice/${id}`, invoice, {
      headers: this.getHeaders(),
    });
  }

  deleteInvoice(id: string) {
    return this.http.delete(`${environment.apiUrl}/invoice/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
