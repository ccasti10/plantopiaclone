import { CreateMaceteroDto } from '../dto/create-macetero.dto';
import { UpdateMaceteroDto } from '../dto/update-macetero.dto';
import { Macetero } from '../entities/macetero.entity';
export declare class MaceterosService {
    maceteros: Macetero[];
    constructor();
    obtCantidadMaceteros(): number;
    createCodigoMacetero(): string;
    create(createMaceteroDto: CreateMaceteroDto, idProducto: number, codigoProducto: string): Macetero;
    findAll(): Macetero[];
    findOne(id: number): Macetero;
    update(id: number, updateMaceteroDto: UpdateMaceteroDto): string;
    remove(id: number): string;
}
