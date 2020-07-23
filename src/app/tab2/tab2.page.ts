import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  constructor(private formBuilder: FormBuilder,private customerService : CustomerService,private route: Router) { 
  }
  customerForm = this.formBuilder.group({
    name: ['',Validators.required],
    address: ['', Validators.required]
  });
  submit()
  {
    this.customerService.CreateCustomer(this.customerForm.value).subscribe(
      () => {
        alert('Data Saved..');
        this.route.navigate(['']);
      },
      error => {
        console.log(error);
      }
    );

  }

}
