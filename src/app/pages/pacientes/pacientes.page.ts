import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit {

  pacientes: Paciente[] = []

  constructor(
    private pacientesService: PacientesService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.pacientes = this.pacientesService.getAll()
    console.log(this.pacientes)
  }

  editarPaciente(paciente: Paciente) {
    this.router.navigate([`./pacientes/${paciente.id}`])
  }

  excluirPaciente(paciente: Paciente) {

  }

}
