import { Component, OnInit } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
      > 
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    this.passengers = [
      {
        id: 1,
        fullname: 'Anders',
        checkedIn: true,
        children: null
      },
      {
        id: 2,
        fullname: 'Amy',
        checkedIn: false,
        children: [{name: 'Fred', age: 12},{name: 'Sally', age: 4}]
      },
      {
        id: 3,
        fullname: 'Connor',
        checkedIn: true,
        children: null
      },
      {
        id: 4,
        fullname: 'Zoey',
        checkedIn: false,
        children: null
      },
      {
        id: 5,
        fullname: 'Bernie',
        checkedIn: true,
        children: null
      }
    ];
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    })
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }

}
