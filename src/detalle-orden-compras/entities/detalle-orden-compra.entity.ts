import { ApiProperty } from "@nestjs/swagger";
export class DetalleOrdenCompra {
      @ApiProperty()
      public idProducto: number;
      @ApiProperty()
      public cantidad: number;
      @ApiProperty()
      public precio: number;
      @ApiProperty()
      public totalProducto: number;
      @ApiProperty()
      public descuento?: number; 
      constructor(
        idProducto: number,
        cantidad: number,
        precio: number,
        totalProducto: number,
        descuento: number,
      
      ) {
        this.idProducto = idProducto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.totalProducto = totalProducto;
        this.descuento = descuento; 
      }
}
 