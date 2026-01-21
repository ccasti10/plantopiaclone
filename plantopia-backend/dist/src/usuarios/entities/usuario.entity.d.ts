import { Planta } from 'src/plantas/entities/planta.entity';
export declare class Usuario {
    id: number;
    rut: string;
    nombre: string;
    email: string;
    password: string;
    telefono: number;
    direccion: string;
    ciudad: string;
    region: string;
    comuna: string;
    codigoPostal: number;
    plantas: Planta[];
    constructor(id: number, rut: string, nombre: string, email: string, password: string, telefono: number, direccion: string, ciudad: string, region: string, comuna: string, codigoPostal: number, plantas: Planta[]);
}
