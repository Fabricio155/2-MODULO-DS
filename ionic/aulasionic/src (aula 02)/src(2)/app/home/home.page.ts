import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  n1=0;
  n2=0;
  res=0;
  somar(){
    this.res=this.n1+this.n2;
  }
}
