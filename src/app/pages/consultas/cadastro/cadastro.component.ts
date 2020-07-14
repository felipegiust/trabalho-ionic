import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConsultasService } from './../../../services/consultas.service';
import { MedicosModalComponent } from "./../../../components/medicos-modal/medicos-modal.component";
import { PacientesModalComponent } from "./../../../components/pacientes-modal/pacientes-modal.component";
import { Paciente } from "./../../../models/paciente";
import { PickerController, ModalController } from "@ionic/angular";
import { Consulta } from "./../../../models/consulta";
import { Prioridade } from "./../../../enums/prioridade";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {
  prioridadeEnum = Prioridade;

  consulta: Consulta;

  constructor(
    private picker: PickerController,
    private consultasService: ConsultasService,
    private router: Router,
    private modalController: ModalController,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.limpar();
  }

  ionViewWillEnter() {
    this.limpar()
    const id = parseInt(this.activatedRoute.snapshot.params["id"]);
    if (id) {
      this.consulta = this.consultasService.getById(id);
    }
  }

  get podeAdd() {
    return true;
  }

  salvar() {
    this.consultasService.salvar(this.consulta);
    this.router.navigate(["./consultas"]);
  }

  async showPrioridadePicker() {
    (
      await this.picker.create({
        columns: [
          {
            name: "Prioridade",
            options: Object.keys(Prioridade).map((prioridade) => {
              return {
                text: Prioridade[prioridade] as string,
                value: Prioridade[prioridade],
              };
            }),
          },
        ],
        buttons: [
          {
            text: "Cancelar",
            role: "cancel",
          },
          {
            text: "Escolher",
            handler: (value) => {
              this.consulta.prioridade = value.Prioridade.value;
              console.log(this.consulta);
            },
          },
        ],
      })
    ).present();
  }
  limpar() {
    this.consulta = {
      data: null,
      descricao: "",
      prioridade: Prioridade.NORMAL,
    };
  }

  async abriModalPaciente() {
    const modal = await this.modalController.create({
      component: PacientesModalComponent,
      componentProps: {
        selecionado: this.consulta.paciente,
      },
    });
    modal.onDidDismiss().then(({ data: paciente }) => {
      if (paciente) {
        this.consulta.paciente = paciente;
      }
    });
    return await modal.present();
  }

  async abriModalMedicos() {
    const modal = await this.modalController.create({
      component: MedicosModalComponent,
      componentProps: {
        selecionado: this.consulta.medico,
      },
    });
    modal.onDidDismiss().then(({ data: medico }) => {
      if (medico) {
        this.consulta.medico = medico;
      }
    });

    await modal.present();
  }
}
