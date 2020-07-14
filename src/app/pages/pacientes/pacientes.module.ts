import { CadastroComponent } from './cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PacientesPageRoutingModule } from './pacientes-routing.module';

import { PacientesPage } from './pacientes.page';
import {NgxMaskIonicModule} from 'ngx-mask-ionic'

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PacientesPageRoutingModule,
    NgxMaskIonicModule
  ],
  declarations: [PacientesPage, CadastroComponent]
})
export class PacientesPageModule {}
