import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  customers: Observable<Customer[]>;
  name: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.name = '';
  }

  search() {
    this.customers = this.customerService.findCustomers(this.name);
  }
}
