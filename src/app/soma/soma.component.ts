import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.sass'],
})
export class SomaComponent implements OnInit {
  numberOne = 10;
  numberTwo = 20;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  soma(): number {
    let resultado = this.numberOne + this.numberTwo;
    return resultado;
  }
}
