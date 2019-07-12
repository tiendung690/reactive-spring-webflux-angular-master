import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers$: Observable<Customer[]>;

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.navigateToAdd();
        },
        error => console.log('ERROR: ' + error)
      );
  }

  reloadData() {
    this.customers$ = this.customerService.getCustomersList();
  }

  navigateToAdd() {
    this.router.navigate(['add']);
  }
}
