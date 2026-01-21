import { Fertilizante } from '../entities/fertilizante.entity';
import { CreateFertilizanteDto } from '../dto/create-fertilizante.dto';
export declare class FertilizantesService {
    fertilizantes: Fertilizante[];
    constructor();
    obtCantidadFertilizantes(): number;
    createCodigoFertilizantes(): string;
    create(createFertilizanteDto: CreateFertilizanteDto, idProducto: number, codigoProducto: string): Fertilizante;
    findAll(): Fertilizante[];
    findOne(id: number): Fertilizante;
}
