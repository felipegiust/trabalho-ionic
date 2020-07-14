import { Sexo } from "./../enums/sexo";
import { Prioridade } from "./../enums/prioridade";
import { Uf } from "./../enums/uf.enum";
import { Consulta } from "./../models/consulta";
import { Injectable } from "@angular/core";
import { CrudService } from "./crud.service";

@Injectable({
  providedIn: "root",
})
export class ConsultasService extends CrudService<Consulta> {
  constructor() {
    super();
    this.data = [
      {
        id: 1,
        medico: {
          nome: "Rodrigo",
          especialidade: "pediátrico",
        },
        data: new Date(),
        paciente: {
          nascimento: new Date(),
          sexo: Sexo.F,
          profissao: "asdsa",
          telefone: "0000",
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
          }
        },
        descricao: "A descriação está aqui....",
        prioridade: Prioridade.ALTISSIMO,
      },
    ];
  }

  getAll(termoPesquisa: string = "") {
    return [...this.data]
    // const termo = termoPesquisa.toLowerCase();
    // return this.data.filter((bean) => {
    //   return bean['numero'].includes(termo);
    // });
  }
}
