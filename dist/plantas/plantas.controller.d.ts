import { PlantasService } from './plantas.service';
import { CreatePlantaDto } from './dto/create-planta.dto';
import { Response } from 'express';
export declare class PlantasController {
    private readonly plantasService;
    constructor(plantasService: PlantasService);
    create(createPlantaDto: CreatePlantaDto, res: Response): void;
    findAll(res: Response): void;
    listaMasVendidas(res: Response): void;
}
