import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplicacao',
  templateUrl: './multiplicacao.component.html',
  styleUrls: ['./multiplicacao.component.sass'],
})
export class MultiplicacaoComponent implements OnInit {
  numberOne = 20;
  numberTwo = 10;
  resultado = 0;

  ngOnInit(): void {
    this.multiplicacao();
  }

  multiplicacao(): void {
    this.resultado = this.numberOne * this.numberTwo;
  }
}
