import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.sass'],
})
export class DivisaoComponent implements OnInit {
  numberOne = 20;
  numberTwo = 10;
  resultado = 0;

  ngOnInit(): void {
    this.divisao();
  }

  divisao(): void {
    this.resultado = this.numberOne / this.numberTwo;
  }
}
