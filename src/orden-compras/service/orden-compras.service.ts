import { Injectable } from '@nestjs/common';
import { CreateOrdenCompraDto } from '../dto/create-orden-compra.dto';  
import { UpdateOrdenCompraDto } from '../dto/update-orden-compra.dto';
import { OrdenCompra } from '../entities/orden-compra.entity';
import { EstadosOC } from '../entities/enum-orden-compra';
import { ErrorPlantopia } from 'src/comunes/error-plantopia/error-plantopia';
import { DetalleOrdenCompra } from 'src/detalle-orden-compras/entities/detalle-orden-compra.entity';
import { ProductosService } from 'src/productos/service/productos.service';
import { DetalleOrdenComprasService } from 'src/detalle-orden-compras/service/detalle-orden-compras.service';
import { CreateDetalleOrdenCompraDto } from 'src/detalle-orden-compras/dto/create-detalle-orden-compra.dto';


@Injectable()
export class OrdenComprasService {
  ordenesCompras: OrdenCompra[]=[];
   fechaHoy = new Date();
   fechaActual= String(this.fechaHoy.getFullYear()) +'-'+ String(this.fechaHoy.getMonth() + 1).padStart(2,'0') + '-' +  String(this.fechaHoy.getDate()).padStart(2,'0');
  constructor(private readonly productoServices:ProductosService, private readonly detalleOrdenServices:  DetalleOrdenComprasService  ){
    this.ordenesCompras = [new OrdenCompra(1,new Date(this.fechaActual), EstadosOC.CREADA,'mail1@dominio.cl',0,null, []),
                          new OrdenCompra(2, new Date(this.fechaActual), EstadosOC.CREADA,'mail2@dominio.cl',0,null, [])];
  }
  
  create(createOrdenCompraDto: CreateOrdenCompraDto) {
    const productosCarro = createOrdenCompraDto.detalle;
    let detalleProductos :DetalleOrdenCompra[]=[];
    for(let i=0;i<productosCarro.length;i++){
      const producto = this.productoServices.findOneID(productosCarro[i].idProducto);
      const productOrden= producto.find(a => a.stock >= productosCarro[i].cantidad);
      if(!productOrden){
          throw new ErrorPlantopia('Stock insuficiente producto ' + productOrden.nombreProducto, 404);
      }
     const totalPrecio= productosCarro[i].cantidad * productOrden.precioNormal; 
     const detalleOrden:DetalleOrdenCompra= new DetalleOrdenCompra(productosCarro[i].idProducto,
                                                                   productosCarro[i].cantidad,
                                                                   productOrden.precioNormal,
                                                                   totalPrecio,
                                                                   productOrden.descuento);
      detalleProductos.push(detalleOrden);
      let detalleOrdenDto:CreateDetalleOrdenCompraDto= new CreateDetalleOrdenCompraDto();
      detalleOrdenDto.idProducto=productosCarro[i].idProducto;
      detalleOrdenDto.cantidad=productosCarro[i].cantidad;
      detalleOrdenDto.precio = productOrden.precioNormal;
      detalleOrdenDto.descuento =productOrden.descuento;
      this.detalleOrdenServices.create(detalleOrdenDto);

      
    }

    const idOC: number = this.ordenesCompras.length + 1;
    const nuevaOrden: OrdenCompra = new OrdenCompra(idOC,new Date(this.fechaActual),EstadosOC.CREADA,createOrdenCompraDto.emailComprador,createOrdenCompraDto.idCliente,null,
    detalleProductos );
    this.ordenesCompras.push(nuevaOrden);
    return 'IdOc: ' + idOC;
  }

  findAll() {
    console.log(this.fechaActual);
    return this.ordenesCompras;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordenCompra`;
  }

  update(id: number, updateOrdenCompraDto: UpdateOrdenCompraDto) {
    return `This action updates a #${id} ordenCompra`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordenCompra`;
  }
}
