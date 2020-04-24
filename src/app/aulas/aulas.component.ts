import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aulas',
  templateUrl: "./aulas.component.html",
  styleUrls: ['./aulas.component.css']
})
export class AulasComponent implements OnInit {


	persona = {
		nombre:'Oscar',
		edad: 20
	}

  constructor() { }

  ngOnInit(): void {
  }

}
