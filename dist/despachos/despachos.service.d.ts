import { VerDespachos } from './dto/ver-despachos-dto';
export declare class DespachosService {
    seguimiento: VerDespachos[];
    constructor();
    findOne(id: number): VerDespachos[];
}
