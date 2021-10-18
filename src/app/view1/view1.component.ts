import { Component, OnInit } from '@angular/core';
import { NorthwindRESTCustomersService } from '../services/northwind-rest-customers.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwindRESTCustomersTable1: any = null;

  constructor(
    private northwindRESTCustomersService: NorthwindRESTCustomersService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindRESTCustomersService.getTable1().subscribe(data => this.northwindRESTCustomersTable1 = data);
  }
}
