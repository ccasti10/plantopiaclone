import { VentasService } from '../service/ventas.service';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    findAll(): string;
    findOne(id: number): string;
    create(createVentaDto: CreateVentaDto): string;
    update(id: number, updateVentaDto: UpdateVentaDto): string;
    remove(id: number): string;
}
