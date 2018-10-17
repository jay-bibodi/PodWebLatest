import { Component, OnInit, ElementRef } from '@angular/core';
import { DateAdapter } from '@angular/material';

declare const require: any;

declare const $: any;

@Component({
    selector: 'app-purchaseToken-cmp',
    templateUrl: 'purchaseToken.component.html',
    styles: [`md-calendar {
      width: 300px;
  }`]
})

export class PurchaseTokenComponent implements OnInit {
  amount = true;
  cities = [
    {value: 'paris-0', viewValue: 'Paris'},
    {value: 'miami-1', viewValue: 'Miami'},
    {value: 'bucharest-2', viewValue: 'Bucharest'},
    {value: 'new-york-3', viewValue: 'New York'},
    {value: 'london-4', viewValue: 'London'},
    {value: 'barcelona-5', viewValue: 'Barcelona'},
    {value: 'moscow-6', viewValue: 'Moscow'},
  ];

    ngOnInit() {}
        myFunc(val: any) {
          // code here
        }
}