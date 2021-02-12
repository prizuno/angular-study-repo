import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtracao',
  templateUrl: './subtracao.component.html',
  styleUrls: ['./subtracao.component.sass'],
})
export class SubtracaoComponent implements OnInit {
  numberOne = 20;
  numberTwo = 10;
  resultado = 0;

  ngOnInit(): void {
    this.subtracao();
  }

  subtracao(): void {
    this.resultado = this.numberOne - this.numberTwo;
  }
}
