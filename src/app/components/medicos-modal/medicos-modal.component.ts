import { Router } from '@angular/router';
import { MedicosService } from './../../services/medicos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicos-modal',
  templateUrl: './medicos-modal.component.html',
  styleUrls: ['./medicos-modal.component.scss'],
})
export class MedicosModalComponent implements OnInit {

  constructor(
    private medicosService: MedicosService,
    private routerService: Router
  ) {
    
   }

  ngOnInit() {}

  listar() {
    // this.medicos = this.medicosService.getAll();
  }

}
