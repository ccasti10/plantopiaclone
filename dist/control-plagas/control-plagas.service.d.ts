import { CreateControlPlagasDto } from './dto/create-control-plagas.dto';
import { UpdateControlPlagasDto } from './dto/update-control-plagas.dto';
import { VerControlPlagas } from './dto/ver-control-plagas-dto';
export declare class ControlPlagasService {
    masVendidos: VerControlPlagas[];
    catalogo: VerControlPlagas[];
    constructor();
    create(createControlPlagasDto: CreateControlPlagasDto): string;
    listaMasVendidas(): VerControlPlagas[];
    findAll(): VerControlPlagas[];
    findOne(id: number): string;
    update(id: number, updateControlPlagasDto: UpdateControlPlagasDto): string;
    remove(id: number): string;
}
