import { FertilizantesService } from './fertilizantes.service';
import { CreateFertilizanteDto } from './dto/create-fertilizante.dto';
import { Response } from 'express';
export declare class FertilizantesController {
    private readonly fertilizantesService;
    constructor(fertilizantesService: FertilizantesService);
    create(createFertilizanteDto: CreateFertilizanteDto, res: Response): void;
    findAll(res: Response): void;
    listaMasVendidas(res: Response): void;
}
