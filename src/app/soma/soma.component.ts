import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.sass'],
})
export class SomaComponent implements OnInit {
  numberOne = 10;
  numberTwo = 20;
  resultado = 0;

  ngOnInit(): void {
    this.soma();
  }

  soma(): void {
    this.resultado = this.numberOne + this.numberTwo;
  }
}
