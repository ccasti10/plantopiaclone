import { Injectable } from '@nestjs/common';
import { CreateDetalleOrdenCompraDto } from '../dto/create-detalle-orden-compra.dto';
import { UpdateDetalleOrdenCompraDto } from '../dto/update-detalle-orden-compra.dto';
import { DetalleOrdenCompra } from '../entities/detalle-orden-compra.entity';
 

@Injectable()
export class DetalleOrdenComprasService {
  detalleOrdenes: DetalleOrdenCompra[]=[];
  create(createDetalleOrdenCompraDto: CreateDetalleOrdenCompraDto) {
    const totalPrecio= createDetalleOrdenCompraDto.precio * createDetalleOrdenCompraDto.cantidad;
    const detalleOrden:DetalleOrdenCompra = new DetalleOrdenCompra(createDetalleOrdenCompraDto.idProducto,
      createDetalleOrdenCompraDto.cantidad,createDetalleOrdenCompraDto.precio,totalPrecio,createDetalleOrdenCompraDto.descuento); 
    this.detalleOrdenes.push(detalleOrden);
  }

  findAll() {
    return `This action returns all detalleOrdenCompras`;
  }

  findOne(id: number) {
    return `This action returns a #${id} detalleOrdenCompra`;
  }

  update(id: number, updateDetalleOrdenCompraDto: UpdateDetalleOrdenCompraDto) {
    return `This action updates a #${id} detalleOrdenCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} detalleOrdenCompra`;
  }
}
