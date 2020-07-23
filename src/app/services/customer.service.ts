import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ICustomer } from '../Interfaces/ICustomer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient){ }
  GetCustomers(): Observable<ICustomer[]>
  {
    return this.http.get<ICustomer[]>(environment.ApiUrl+'api/Customers');
  }
  CreateCustomer(customerDetails:any)
  {
    return this.http.post(environment.ApiUrl+'api/Customers',customerDetails);
  }
}
