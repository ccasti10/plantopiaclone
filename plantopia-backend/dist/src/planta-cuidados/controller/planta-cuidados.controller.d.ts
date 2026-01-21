import { PlantaCuidadosService } from '../service/planta-cuidados.service';
import { CreatePlantaCuidadoDto } from '../dto/create-planta-cuidado.dto';
import { UpdatePlantaCuidadoDto } from '../dto/update-planta-cuidado.dto';
export declare class PlantaCuidadosController {
    private readonly plantaCuidadosService;
    constructor(plantaCuidadosService: PlantaCuidadosService);
    create(createPlantaCuidadoDto: CreatePlantaCuidadoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePlantaCuidadoDto: UpdatePlantaCuidadoDto): string;
    remove(id: string): string;
}
