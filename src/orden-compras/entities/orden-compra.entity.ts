import { ApiProperty } from "@nestjs/swagger";
import { EstadosOC } from "./enum-orden-compra";
import { DetalleOrdenCompra } from "src/detalle-orden-compras/entities/detalle-orden-compra.entity";
import { Despacho } from "src/despachos/entities/despacho.entity";

export class OrdenCompra {
  @ApiProperty()
  public id: number;
  @ApiProperty()
  public fechaOC: Date;
  @ApiProperty()
  public estadoOC: EstadosOC;
  @ApiProperty()
  public emailComprador: string;
  @ApiProperty()
  public idCliente?: number;
  @ApiProperty()
  public despacho?: Despacho;
  @ApiProperty()
  public detalle: DetalleOrdenCompra[];
  constructor(
    id: number,
    fechaOC: Date,
    estadoOC: EstadosOC,
    emailComprador: string,
    idCliente: number,
    despacho: Despacho,
    detalle: DetalleOrdenCompra[]
  ) {
    this.id = id;
    this.fechaOC = fechaOC;
    this.estadoOC = estadoOC;
    this.emailComprador= emailComprador;
    this.idCliente = idCliente;
    this.despacho = despacho;
    this.detalle = detalle;
  }
}
