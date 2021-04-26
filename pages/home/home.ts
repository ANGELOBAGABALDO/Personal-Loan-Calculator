import value from '*.json';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public  amount: number;
public  term: number;
public  rate: number;
public  IP: number;
public  AP: number;
public  MP: number;
  

calculateAmount() {
  this.IP = ((this.amount*this.rate/100)*this.term);
}
calculatePayable() {
  this.AP = parseInt(this.amount) + parseInt(this.IP);
}
calculateMonth() {
  this.MP = (this.AP/this.term);
}
}


