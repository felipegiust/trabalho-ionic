import { CrudService } from "./crud.service";
import { Paciente } from "./../models/paciente";
import { Injectable } from "@angular/core";
import { Sexo } from "../enums/sexo";
import { Uf } from "../enums/uf.enum";
import { random, merge } from "lodash";

@Injectable({
  providedIn: "root",
})
export class PacientesService extends CrudService<Paciente> {
  constructor() {
    super();
    this.data = [
      {
        nome: "Zé droguinha",
        fotoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZ6_lBs87kjL8qQYMpc2V4d35qqTRccNFcjg&usqp=CAU",
        cpf: "0000000",
        endereco: {
          cep: "0000",
          cidade: "Criciúma",
          complemento: "sadas",
          logradouro: "sdad",
          numero: 100,
          uf: Uf.SC,
        },
        nascimento: new Date(),
        profissao: "Marcineiro",
        sexo: Sexo.M,
        telefone: "0000",
        id: 1,
      },
    ];
  }
}
