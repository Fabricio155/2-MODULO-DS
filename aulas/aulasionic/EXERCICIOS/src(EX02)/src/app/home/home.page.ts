import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selecionado="";
valor=0;
resultado=0;
desconto=0;

alertButtons = [this.resultado];
  constructor() {}

  valorfinal(){
     if(this.selecionado>=15){
     this.resultado=(this.valor*this.selecionado)-(this.valor*this.selecionado*0.15);

     }else if(this.selecionado<15){
      this.resultado=this.valor*this.selecionado;
    }else{
      this.desconto=(this.valor*this.selecionado*0.15);
    }





  }

}




