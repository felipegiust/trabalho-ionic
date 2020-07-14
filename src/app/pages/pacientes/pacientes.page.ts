import { Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from './../../models/paciente';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.page.html',
  styleUrls: ['./pacientes.page.scss'],
})
export class PacientesPage implements OnInit{

  pacientes: Paciente[] = []

  constructor(
    private pacientesService: PacientesService,
    private router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.load()
  }

  ionViewWillEnter() {
    this.load()
  }

  load() {
    this.pacientes = this.pacientesService.getAll()
  }

  editarPaciente(paciente: Paciente) {
    this.router.navigate([`./pacientes/${paciente.id}`])
  }

  async excluirPaciente(paciente: Paciente) {
    const alert = await this.alertController.create({
      header: 'Excluir?',
      message: 'Deseja excluir paciente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        }, {
          text: 'Sim',
          handler: () => {
            this.pacientesService.delete(paciente.id)
            this.load()
          }
        }
      ]
    });
    alert.present()
  }

}
