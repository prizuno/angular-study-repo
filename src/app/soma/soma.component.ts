import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-soma',
  templateUrl: './soma.component.html',
  styleUrls: ['./soma.component.sass'],
})
export class SomaComponent implements OnInit {
  numberOne: number;
  numberTwo: number;
  resultado: number;

  onInput(event: number){
    this.numberOne = event.target.value;
  }

  ngOnInit(): void {
    this.soma();
  }

  soma(): void {
    this.numberTwo = 30;
    this.resultado = this.numberOne + this.numberTwo;
  }
}
