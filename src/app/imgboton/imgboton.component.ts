import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imgboton',
  template: `
  <img src = "{{ imagenURL }}"/> de forma normal
  <img [src] = "imagenURL"/><br/><br/>
  <button disabled>Mi Boton </button><br/><br/>
  <button [disabled]="botonStatus">Mi Boton Dos</button><br/><br/>
  <button [class.activo] = "isActive">Mi Boton Tres</button><br/><br/>
  <button [style.borderColor] = "estadosb ? 'green' : 'white'">Mi Boton style binding</button><br/><br/>
  <button (click) = "doce($event)">Mi Boton event binding (click)</button><br/><br/>
  <button (mouseover) = "doce($event)">Mi Boton event binding(mouseover)</button><br/><br/>
  <input placeholder = "event Filtering (sin filtro deteccion de enter desde el input)" type = "text" (keyup) = "eventoDelInput($event)" /><br/><br/>
  <input placeholder = "event Filtering (con filtro deteccion de enter desde el input)" type = "text" (keyup.enter) = "eventoDelInputDos()" /><br/><br/>
  <input placeholder = "template variable (sin uso de template variable)" type = "text" (keyup.enter) = "obtenerVariableUno($event)" /><br/><br/>
  <input placeholder = "template variable (con uso de template variable)" type = "text" (keyup.enter) = "obtenerVariableDos(nombre.value)" #nombre /><br/><br/>

  `,
  styles: [`
  .activo{
  	background: green;
  }
  `]
})
export class ImgbotonComponent implements OnInit {

	imagenURL ="http://lorempixel.com/400/200";
	botonStatus =false;
	isActive =true;
  estadosb = true;
  doce(e){
    console.log(e);  
  }
  eventoDelInput(e){
    if(e.keyCode === 13){
      console.log("Enter fue presionado");
    }
  }

  eventoDelInputDos(){
      console.log("Enter fue presionado");
  }
  obtenerVariableUno(e){
      console.log(e.target.value);
  }
  obtenerVariableDos(usuario){
      console.log(usuario);
  }
  


  constructor() { }

  ngOnInit(): void {
  }

}
