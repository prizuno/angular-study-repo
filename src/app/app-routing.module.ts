import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SomaComponent } from './soma/soma.component';

const routes: Routes = [{ path: 'soma', component: SomaComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
