import { PacientesModalComponent } from './../../components/pacientes-modal/pacientes-modal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPageRoutingModule } from './consultas-routing.module';

import { ConsultasPage } from './consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule
  ],
  declarations: [ConsultasPage, CadastroComponent],
})
export class ConsultasPageModule {}
