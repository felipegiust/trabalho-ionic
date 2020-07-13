
import { Sexo } from './../enums/sexo';
import { Endereco } from './endereco';

export interface Paciente {
    id?: number;
    nome: string;
    nascimento:Date;
    sexo:Sexo;
    cpf: string;
    telefone: string;
    profissao:string;
    endereco:Endereco;
    fotoUrl?: string;
}

