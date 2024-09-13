import { CreateSustratoDto } from '../dto/create-sustrato.dto';
import { UpdateSustratoDto } from '../dto/update-sustrato.dto';
import { Sustrato } from '../entities/sustrato.entity';
import { VerSustratos } from '../dto/ver-sustratos-dto';
export declare class SustratosService {
    masVendidos: VerSustratos[];
    catalogo: VerSustratos[];
    addSustratos: Sustrato[];
    constructor();
    create(createSustratoDto: CreateSustratoDto): string;
    listaMasVendidas(): VerSustratos[];
    findAll(): VerSustratos[];
    findOne(id: number): string;
    update(id: number, updateSustratoDto: UpdateSustratoDto): string;
    remove(id: number): string;
}
