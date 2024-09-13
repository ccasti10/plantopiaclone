import { EstadosDespacho } from "../entities/enum-despachos";
export declare class CreateDespachoDto {
    fechaEstimada: Date;
    EstadosDespacho: EstadosDespacho;
    nroSeguimiento: number;
    proveedorDespacho: string;
}
