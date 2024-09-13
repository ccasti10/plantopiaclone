import { CreatePlantaDto } from './dto/create-planta.dto';
import { UpdatePlantaDto } from './dto/update-planta.dto';
import { VerPlantas } from './dto/ver-plantas-dto';
export declare class PlantasService {
    masVendidos: VerPlantas[];
    catalogo: VerPlantas[];
    constructor();
    create(createPlantaDto: CreatePlantaDto): string;
    listaPlantasMasVendidas(): VerPlantas[];
    findAll(): VerPlantas[];
    findOne(id: number): string;
    update(id: number, updatePlantaDto: UpdatePlantaDto): string;
    remove(id: number): string;
}
