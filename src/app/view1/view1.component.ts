import { Component, OnInit } from '@angular/core';
import { NorthwindRESTExcel2JsonCustomersService } from '../services/northwind-rest-excel2json-customers.service';
import { NorthwindRESTExcel2JsonOrdersService } from '../services/northwind-rest-excel2json-orders.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwindRESTExcel2JsonCustomersCustomers: any = null;
  public northwindRESTExcel2JsonOrdersOrders: any = null;

  constructor(
    private northwindRESTExcel2JsonCustomersService: NorthwindRESTExcel2JsonCustomersService,
    private northwindRESTExcel2JsonOrdersService: NorthwindRESTExcel2JsonOrdersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindRESTExcel2JsonCustomersService.getCustomers().subscribe(data => this.northwindRESTExcel2JsonCustomersCustomers = data);
    this.northwindRESTExcel2JsonOrdersService.getOrders().subscribe(data => this.northwindRESTExcel2JsonOrdersOrders = data);
  }
}
