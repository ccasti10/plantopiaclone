import { ControlPlagasService } from './control-plagas.service';
import { CreateControlPlagasDto } from './dto/create-control-plagas.dto';
import { Response } from 'express';
export declare class ControlPlagasController {
    private readonly controlPlagasService;
    constructor(controlPlagasService: ControlPlagasService);
    create(createControlPlagasDto: CreateControlPlagasDto, res: Response): void;
    findAll(res: Response): void;
    listaMasVendidas(res: Response): void;
}
