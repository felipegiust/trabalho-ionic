import { Paciente } from "./../models/paciente";
import { Injectable } from "@angular/core";
import { Sexo } from "../enums/sexo";
import { Uf } from "../enums/uf.enum";

@Injectable({
  providedIn: "root",
})
export class PacientesService {
  private pacientes: Paciente[];
  constructor() {
    this.pacientes = [
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

  salvar(paciente: Paciente) {
    this.pacientes.push(paciente);
    console.log(this.pacientes);
  }

  getAll(termoPesquisa: string = "") {
    const termo = termoPesquisa.toLowerCase()
    return this.pacientes.filter(paciente => {
      return paciente.nome.includes(termo)
    })
  }

}
