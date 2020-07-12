
import { Medico } from './medico';
import { Paciente } from './paciente';
import { Prioridade } from '../enums/prioridade';
export interface Consulta {
    id: number;
    medico:Medico;
    data:Date;
    paciente:Paciente;
    descricao:string;
    prioridade:Prioridade;
}

const medicos = [{
    nome: "sdf",
    id: 1
}]