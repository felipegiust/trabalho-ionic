import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PacientesPage } from './pacientes.page';
import { CadastroComponent } from './cadastro/cadastro.component';

const routes: Routes = [
  {
    path: '',
    component: PacientesPage
  },
  {
    path: ':id',
    component: CadastroComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
exports: [RouterModule],
})
export class PacientesPageRoutingModule {}
