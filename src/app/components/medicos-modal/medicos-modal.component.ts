import { ModalController } from '@ionic/angular';
import { Medico } from './../../models/medico';
import { Router } from '@angular/router';
import { MedicosService } from './../../services/medicos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-medicos-modal',
  templateUrl: './medicos-modal.component.html',
  styleUrls: ['./medicos-modal.component.scss'],
})
export class MedicosModalComponent implements OnInit {
  medicos: Medico[];

  termoPesquisa: string;

  @Input()
  selecionado: Medico;

  constructor(
    private medicosService: MedicosService,
    private routerService: Router,
    private modal: ModalController
  ) {
    
   }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.medicos = this.medicosService.getAll();
  }

  dismiss() {
    this.modal.dismiss();
  }

  async selecionar(medico: Medico) {
    await this.modal.dismiss(medico);
  }

  pesquisar($event) {
    this.medicos = this.medicosService.getAll($event.target.value);
  }

}
