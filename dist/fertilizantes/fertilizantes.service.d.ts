import { CreateFertilizanteDto } from './dto/create-fertilizante.dto';
import { UpdateFertilizanteDto } from './dto/update-fertilizante.dto';
import { VerFertilizantes } from './dto/ver-fertilizantes-dto';
export declare class FertilizantesService {
    masVendidos: VerFertilizantes[];
    catalogo: VerFertilizantes[];
    constructor();
    create(createFertilizanteDto: CreateFertilizanteDto): string;
    listaMasVendidas(): VerFertilizantes[];
    findAll(): VerFertilizantes[];
    findOne(id: number): string;
    update(id: number, updateFertilizanteDto: UpdateFertilizanteDto): string;
    remove(id: number): string;
}
