import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selecionado='';
valor=0;
resultado=0;
alertButtons = [this.resultado];

  constructor() {}
valorfinal(){
 if(this.selecionado=='10'){
  this.resultado=this.valor-(this.valor*0.1);
 }else if(this.selecionado=='20'){
  this.resultado=this.valor-(this.valor*0.2);
 }else{

  this.resultado=this.valor-(this.valor*0.3);

 }
 




}

}
