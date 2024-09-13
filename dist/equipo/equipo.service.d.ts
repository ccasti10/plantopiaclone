import { Area } from 'src/models/Area';
export declare class EquipoService {
    equipo: Area[];
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
    getAreas(nombreArea?: string): Area[];
}
