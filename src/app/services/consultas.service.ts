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
  }

  getAll(termoPesquisa: string = "") {
    return [...this.data]
    // const termo = termoPesquisa.toLowerCase();
    // return this.data.filter((bean) => {
    //   return bean['numero'].includes(termo);
    // });
  }
}
