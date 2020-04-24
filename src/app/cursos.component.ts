//importar componente
import { Component } from '@angular/core';

//declarar componente
@Component({
	//selector se convierte en etiqueta html
	selector: 'cursos',
	//hace referencia a un documento externo ./ para referirnos a la carpeta app, sin url se usan directo las etiquetas html
	template: `<h1>Mis Cursos</h1>
	<p>esto es un parrafo</p>
	`,
	// si queremos hacer referencia a varias etiquetas html, usamos los signos ` en vez de ''
	//el valor de la propiedad es un arreglo,hace referencia a un documento externo css, si no se hace referencia solo se usa //style nostyleUrls: [] 
	styles: ['h1 {color:red;}']

})

export class CursosComponent {
	//clase debe ser con cada palabra que inicia en mayuscula
}

//luego se debe regristrar en el documento module.ts.
