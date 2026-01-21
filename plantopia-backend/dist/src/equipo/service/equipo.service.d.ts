import { Equipo } from '../entities/equipo.entity';
export declare class EquipoService {
    equipo: Equipo[];
    constructor();
    private ecommerce;
    nombreEquipo: string;
    jefeEquipo: string;
    getEquipo(): {
        nombreEquipo: string;
        liderEquipo: string;
        equipo: {
            nombreArea: string;
            jefe: string;
            miembros: string[];
        }[];
    };
    getEcommerce(): {
        nombre: string;
        descripcion: string;
        tipo: string;
        objetivoGeneral: string;
        objetivosEspecificos: string[];
    };
    getAreas(nombreArea?: string): Equipo[];
}
