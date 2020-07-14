import { CrudService } from './crud.service';
import { Medico } from './../models/medico';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicosService extends CrudService<Medico> {

  constructor() {
    super()
    this.data = [
      {
        id: 1,
        nome: "Rodrigo",
        especialidade:"Pediatra"
      },
      {
        id: 2,
        nome: "Fernando",
        especialidade:"Cardiologista"
      },
      {
        id: 3,
        nome: "Maria",
        especialidade:"Psiquiatra"
      }
    ];
   }

}


