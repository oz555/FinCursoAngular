import { FormGroup,FormControl,Validators } from '@angular/forms';
import { UsuariosService } from './usuarios.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = 'Curso de Angular';
  nombre ='Luis';
  nombree ='Pedro';
  getNombre(){
  	return this.nombree;
  }
 personas:any = [];
  constructor(private usuariosservice : UsuariosService){
  	this.personas = usuariosservice.getUsuarios();
  }

  miFormulario = new FormGroup({
  	username : new FormControl('',Validators.required),
  	userpassword : new FormControl('',Validators.required)
  });


}
