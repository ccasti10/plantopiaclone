import { ControlPlagas } from '../entities/control-plagas.entity';
import { CreateControlPlagasDto } from '../dto/create-control-plagas.dto';
export declare class ControlPlagasService {
    controlPlagas: ControlPlagas[];
    constructor();
    create(createControlPlagasDto: CreateControlPlagasDto, idProducto: number, codigoProducto: string): ControlPlagas;
    obtCantidadControlPlagas(): number;
    createCodigoControlPlagas(): string;
    findAll(): ControlPlagas[];
    findOne(id: number): ControlPlagas;
}
