import { Response } from 'express';
import { CreateSustratoDto } from '../dto/create-sustrato.dto';
import { SustratosService } from '../service/sustratos.service';
export declare class SustratosController {
    private readonly sustratosService;
    constructor(sustratosService: SustratosService);
    create(createSustratoDto: CreateSustratoDto, res: Response): void;
    findAll(res: Response): void;
    listaMasVendidas(res: Response): void;
}
