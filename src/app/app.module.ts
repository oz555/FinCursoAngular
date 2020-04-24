import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { AulasComponent } from './aulas/aulas.component';
import { ImgbotonComponent } from './imgboton/imgboton.component';
import { UsuariosService } from './usuarios.service';
import { MensajeComponent } from './mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AulasComponent,
    ImgbotonComponent,
    MensajeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [UsuariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
