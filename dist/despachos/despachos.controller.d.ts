import { DespachosService } from './despachos.service';
import { Response } from 'express';
export declare class DespachosController {
    private readonly despachosService;
    constructor(despachosService: DespachosService);
    findOne(id: string, res: Response): void;
}
