import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomaComponent } from './soma/soma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubtracaoComponent } from './subtracao/subtracao.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { MultiplicacaoComponent } from './multiplicacao/multiplicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    SomaComponent,
    SubtracaoComponent,
    DivisaoComponent,
    MultiplicacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
