import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
selecionado='';
sexo='';
alertButtons = ['OK'];

  constructor() {}
checarsexo(){
  if(this.selecionado=="FEMININO"){
    this.sexo='FEMININO';
  }else{
    this.sexo='MASCULINO'
  }
}
}
