import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

	private numero1: string;
	private numero2: string;
	private resultado: number;
	private operacao: string;

  constructor(private CalculadoraService: CalculadoraService) { }

  ngOnInit() {
  	  this.limpar();
  }


  limpar(): void {
  	 this.numero1 = '0';
  	 this.numero2 = null;
  	 this.resultado = null;
  	 this.operacao = null;
  }

}
