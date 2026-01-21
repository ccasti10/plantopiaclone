import { CreateSustratoDto } from '../dto/create-sustrato.dto';
import { UpdateSustratoDto } from '../dto/update-sustrato.dto';
import { Sustrato } from '../entities/sustrato.entity';
export declare class SustratosService {
    sustratos: Sustrato[];
    constructor();
    obtCantidad(): number;
    createCodigo(): string;
    create(cretaSustratoDto: CreateSustratoDto, idProducto: number, codigoProducto: string): Sustrato;
    findAll(): Sustrato[];
    findOne(id: number): Sustrato;
    update(id: number, updateSustratoDto: UpdateSustratoDto): string;
    remove(id: number): string;
}
