import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
LADO1=0;
LADO2=0;
LADO3=0;
resultado='';
triangulo(){
  if(this.LADO2+this.LADO3>this.LADO1 && this.LADO1+this.LADO2>this.LADO3 && this.LADO3+this.LADO1>this.LADO2 ){
    if(this.LADO1  == this.LADO2 && this.LADO3==this.LADO1 && this.LADO3== this.LADO2){
      this.resultado="EQUILATERO";
    }else if (this.LADO1==this.LADO2||this.LADO2==this.LADO3||this.LADO3==this.LADO1){
      this.resultado="Isoceles";


    }else{
      this.resultado="escaleno";
    }
  }else
  {
    this.resultado="ESSAS MEDIDAS NÃO FORMAM UM TRIANGULO";
  }

}

  constructor() {}

}

