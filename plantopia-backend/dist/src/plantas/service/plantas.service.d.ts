import { Planta } from '../entities/planta.entity';
import { CreatePlantaDto } from '../dto/create-planta.dto';
export declare class PlantasService {
    plantas: Planta[];
    constructor();
    obtCantidadPlantas(): number;
    createCodigoPlanta(): string;
    create(createPlantaDto: CreatePlantaDto, idProducto: number, codigoProducto: string): Planta;
    findAll(): Planta[];
    findOne(id: number): Planta;
}
