import { VerProductosDto } from "src/productos/dto/ver-productos.dto";

export class VerMaceterosDto extends VerProductosDto {
    public alto: number;
    public ancho: number;
    public peso: number;
    public capacidad: number;
    public material: string;
    public color: string;
    public forma: string;
}