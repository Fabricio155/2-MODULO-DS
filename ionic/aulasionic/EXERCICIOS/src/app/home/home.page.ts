import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
km=0;
VALOR=0;
APP=0;
CLIENTE=0;

cotacao(){
  if(this.km<= 50){
(this.VALOR=(this.km)*4.20).toFixed(2.1);
  }else{
    (this.VALOR=(this.km)*3.98).toFixed(2.1);
  }
  this.APP=(this.VALOR)*0.2;
 (this.CLIENTE=this.VALOR+this.APP).toFixed(2.1);
}
  constructor() {}

}
