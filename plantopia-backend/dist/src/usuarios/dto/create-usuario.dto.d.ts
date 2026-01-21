import { Planta } from 'src/plantas/entities/planta.entity';
export declare class CreateUsuarioDto {
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
}
