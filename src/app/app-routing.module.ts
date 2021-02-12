import { SubtracaoComponent } from './subtracao/subtracao.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { MultiplicacaoComponent } from './multiplicacao/multiplicacao.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomaComponent } from './soma/soma.component';

const routes: Routes = [{ path: 'soma', component: SomaComponent }];
const routes_1: Routes = [{ path: 'subtracao', component: SubtracaoComponent }];
const routes_2: Routes = [{ path: 'divisao', component: DivisaoComponent }];
const routes_3: Routes = [
  { path: 'multiplicacao', component: MultiplicacaoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(routes_1, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(routes_2, { relativeLinkResolution: 'legacy' }),
    RouterModule.forRoot(routes_3, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
