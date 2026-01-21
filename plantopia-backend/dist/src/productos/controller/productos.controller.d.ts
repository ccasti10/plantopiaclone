import { Response } from 'express';
import { CreateMaceteroDto } from 'src/maceteros/dto/create-macetero.dto';
import { ProductosService } from '../service/productos.service';
import { TipoProductos } from '../entities/enum-productos';
import { CreatePlantaDto } from 'src/plantas/dto/create-planta.dto';
import { CreateControlPlagasDto } from 'src/control-plagas/dto/create-control-plagas.dto';
import { CreateFertilizanteDto } from 'src/fertilizantes/dto/create-fertilizante.dto';
import { CreateSustratoDto } from 'src/sustratos/dto/create-sustrato.dto';
export declare class ProductosController {
    private readonly productosService;
    constructor(productosService: ProductosService);
    bestSellers(res: Response): void;
    crearPlanta(CreatePlantaDto: CreatePlantaDto, res: Response): void;
    crearFertilizante(CreateFertilizanteDto: CreateFertilizanteDto, res: Response): void;
    crearSustrato(createSustratoDto: CreateSustratoDto, res: Response): void;
    crearControlPlaga(CreateControlPlagasDto: CreateControlPlagasDto, res: Response): void;
    crearMacetero(CreateMaceteroDto: CreateMaceteroDto, res: Response): void;
    findAll(res: Response): void;
    findbyType(tipo: TipoProductos, res: Response): void;
    findOne(codigoProducto: string, res: Response): void;
}
