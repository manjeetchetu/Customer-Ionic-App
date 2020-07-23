import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { ICustomer } from '../Interfaces/ICustomer';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 private customerData:any;
  constructor(private customerService : CustomerService ) {
  }
  ngOnInit()
  {
    this.GetCustomer();
  }
  ionViewWillEnter() {
    this.GetCustomer();
}
  GetCustomer() {
    this.customerService.GetCustomers().subscribe((data: Array<ICustomer>) => {
      this.customerData=data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}
