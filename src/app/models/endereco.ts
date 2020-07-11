import { UnaryFunction } from 'rxjs';
import { Uf } from '../enums/uf.enum';

export interface Endereco {
    logradouro: string;
    cidade: string;
    UF:Uf;
    cep: number;
    numero: number;
    complemento: string;
}
