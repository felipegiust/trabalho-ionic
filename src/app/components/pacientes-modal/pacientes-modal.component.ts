import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";
import { PacientesService } from "src/app/services/pacientes.service";
import { Paciente } from "./../../models/paciente";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pacientes-modal",
  templateUrl: "./pacientes-modal.component.html",
  styleUrls: ["./pacientes-modal.component.scss"],
})
export class PacientesModalComponent implements OnInit {
  pacientes: Paciente[];

  termoPesquisa: string;

  @Input()
  selecionado: Paciente;

  constructor(
    private pacientesService: PacientesService,
    private modal: ModalController
  ) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pacientes = this.pacientesService.getAll();
  }

  dismiss() {
    this.modal.dismiss();
  }

  async selecionar(paciente: Paciente) {
    await this.modal.dismiss(paciente);
  }

  pesquisar($event) {
    this.pacientes = this.pacientesService.getAll($event.target.value);
  }
}
