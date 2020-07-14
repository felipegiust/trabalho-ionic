import { AlertController } from '@ionic/angular';
import { Paciente } from './../../models/paciente';
import { Prioridade } from './../../enums/prioridade';
import { ConsultasService } from './../../services/consultas.service';
import { Router } from '@angular/router';
import { Consulta } from './../../models/consulta';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {

  consultas: Consulta[] = []

  corByPrioridade = {
    [Prioridade.ALTISSIMO]: "red",
    [Prioridade.ALTO]: "orange",
    [Prioridade.MEDIO]: "yellow",
    [Prioridade.NORMAL]: "green",
  }

  constructor(
    private consultasService: ConsultasService,
    private router: Router,
    private alertController: AlertController
  ) {
    
   }

  ngOnInit() {
    this.load()
  }

  load() {
    this.consultas = this.consultasService.getAll()
  }

  ionViewWillEnter() {
    this.load()
  }

  editarConsulta(consulta: Consulta) {
    this.router.navigate([`./consultas/${consulta.id}`])
  }

  async excluirConsulta(consulta: Consulta) {
    const alert = await this.alertController.create({
      header: 'Excluir?',
      message: 'Deseja excluir consulta?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
        }, {
          text: 'Sim',
          handler: () => {
            this.consultasService.delete(consulta.id)
            this.load()
          }
        }
      ]
    });
    alert.present()
  }
  
  calculaIdadePaciente(paciente: Paciente) {
    const today = new Date()
    const currentYear = today.getFullYear()
    return currentYear - new Date(paciente.nascimento).getFullYear() 
  }
  
}
