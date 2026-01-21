import { Response } from 'express';
import { DespachosService } from '../service/despachos.service';
export declare class DespachosController {
    private readonly despachosService;
    constructor(despachosService: DespachosService);
    findOne(id: string, res: Response): void;
}
