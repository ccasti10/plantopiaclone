import { Planta } from 'src/plantas/entities/planta.entity';
export declare class VerUsuarioDto {
    nombre: string;
    email: string;
    plantas: Planta[];
    constructor(nombre: string, email: string, plantas: Planta[]);
}
