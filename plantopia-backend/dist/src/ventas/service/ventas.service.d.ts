import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';
export declare class VentasService {
    create(createVentaDto: CreateVentaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVentaDto: UpdateVentaDto): string;
    remove(id: number): string;
}
