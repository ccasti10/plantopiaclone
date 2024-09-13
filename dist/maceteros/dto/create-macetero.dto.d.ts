import { CreateProductoDto } from "src/productos/dto/create-producto.dto";
import { FormaMacetero } from "../entities/enum-macetero";
export declare class CreateMaceteroDto extends CreateProductoDto {
    alto: number;
    ancho: number;
    peso: number;
    capacidad: number;
    material: string;
    color: string;
    forma: FormaMacetero;
}
