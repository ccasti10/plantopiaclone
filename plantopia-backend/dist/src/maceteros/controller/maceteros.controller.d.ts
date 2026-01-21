import { MaceterosService } from '../service/maceteros.service';
import { UpdateMaceteroDto } from '../dto/update-macetero.dto';
export declare class MaceterosController {
    private readonly maceterosService;
    constructor(maceterosService: MaceterosService);
    findAll(): import("../entities/macetero.entity").Macetero[];
    findOne(id: string): import("../entities/macetero.entity").Macetero;
    update(id: string, updateMaceteroDto: UpdateMaceteroDto): string;
    remove(id: string): string;
}
