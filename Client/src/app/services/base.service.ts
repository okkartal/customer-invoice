import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected http: HttpClient) { }

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders()
      .set('X-API-KEY', environment.apiKey)
      .set('Content-Type', 'application/json');
    return headers;
  }
}
