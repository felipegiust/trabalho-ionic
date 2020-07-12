import { UnaryFunction } from 'rxjs';
import { Uf } from '../enums/uf.enum';

export interface Endereco {
    logradouro: string;
    cidade: string;
    uf: Uf;
    cep: string;
    numero: number;
    complemento: string;
}
