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
  }
}
