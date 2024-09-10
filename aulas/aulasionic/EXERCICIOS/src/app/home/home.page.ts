import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nota1: number =0;
  nota2: number =0;
  nota3: number =0;
  nota4: number =0;
  media: number =0;
  resultado='';
  

  conta(){  this.media= ((this.nota1+this.nota2+this.nota3+this.nota4) /4);
    if (this.media >= 5.9) {
      this.resultado = 'Aprovado';
    } else if (this.media >= 3.1) {
      this.resultado = 'Recuperação';
    } else {
      this.resultado = 'Reprovado';
    }
    
  }
   
   
  constructor() {
  
  }

}
