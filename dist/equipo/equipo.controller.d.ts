import { EquipoService } from './equipo.service';
import { Area } from 'src/models/Area';
export declare class EquipoController {
    private readonly equipoService;
    constructor(equipoService: EquipoService);
    getEquipo(): {
        nombreEquipo: string;
        liderEquipo: string;
        equipo: {
            nombreArea: string;
            jefe: string;
            miembros: string[];
        }[];
    };
    getAreas(nombreArea?: string): Area[];
    getEcommerce(): object;
    findAll(): void;
    findOne(id: string): void;
    create(createEquipoDto: any): void;
    update(id: string, updateEquipoDto: any): void;
    remove(id: string): void;
}
