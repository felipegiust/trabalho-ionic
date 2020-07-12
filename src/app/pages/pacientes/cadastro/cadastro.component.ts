import { Uf } from './../../../enums/uf.enum';
import { Paciente } from "./../../../models/paciente";
import { Component, OnInit } from "@angular/core";
import { Sexo } from "src/app/enums/sexo";
import { PickerController } from "@ionic/angular";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.scss"],
})
export class CadastroComponent implements OnInit {

  sexoEnum = Sexo

  estadosOptions = Object.keys(Uf).map(uf => ({
    value: uf,
    label: Uf[uf]
  }))

  paciente: Paciente = {
    nome: "",
    cpf: "",
    endereco: {
      cep: "",
      cidade: "",
      complemento: "",
      logradouro: "",
      numero: null,
      uf: null,
    },
    nascimento: new Date(),
    telefone: "",
    sexo: Sexo.F,
    profissao: "",
  };

  constructor(private picker: PickerController) {}

  ngOnInit() {}

  async showSexoPicker() {
    (await this.picker.create({
      columns: [
        {
          name: "Sexo",
          options: Object.keys(Sexo).map((sexo) => {
            return {
              text: Sexo[sexo] as string,
              value: sexo,
            };
          })
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Escolher',
          handler: (value) => {
            this.paciente.sexo = value.Sexo.value
            console.log(this.paciente)
          }
        }
      ]
    })).present();
  }
}