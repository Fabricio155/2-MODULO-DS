import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
resultadoc='';
resultadof='';
temp=0;
CemF(){

  this.resultadoc=((9*this.temp+160)/5).toFixed(1);

}
TemF(){
  this.resultadof=((this.temp-32)*(5/9)).toFixed(1);
}

  constructor() {}

}
