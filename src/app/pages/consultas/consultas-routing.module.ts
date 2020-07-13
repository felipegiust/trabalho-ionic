import { PacientesModalComponent } from './../../components/pacientes-modal/pacientes-modal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultasPage } from './consultas.page';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: ConsultasPage
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
export class ConsultasPageRoutingModule {}
