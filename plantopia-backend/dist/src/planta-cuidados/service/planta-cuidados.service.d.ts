import { CreatePlantaCuidadoDto } from '../dto/create-planta-cuidado.dto';
import { UpdatePlantaCuidadoDto } from '../dto/update-planta-cuidado.dto';
export declare class PlantaCuidadosService {
    create(createPlantaCuidadoDto: CreatePlantaCuidadoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePlantaCuidadoDto: UpdatePlantaCuidadoDto): string;
    remove(id: number): string;
}
