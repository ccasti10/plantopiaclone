import { Injectable } from '@nestjs/common';
import { CreateMaceteroDto } from '../dto/create-macetero.dto';
import { UpdateMaceteroDto } from '../dto/update-macetero.dto';
import { Macetero } from '../entities/macetero.entity';
import { TipoProductos } from 'src/productos/entities/enum-productos';
import { FormaMacetero } from '../entities/enum-macetero';

@Injectable()
export class MaceterosService {
  maceteros:Macetero[]=[]
  constructor(){
   this.maceteros = [new Macetero(1,'macetero rojo',['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10,'macetero de alta gama', TipoProductos.Macetero,0,0,'MA1',15, 16, 0.17,1.5,'Plastico','rojo', FormaMacetero.Rectangular),
                     new Macetero(2,'macetero blanco',['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'macetero interior', TipoProductos.Macetero,0,500,'MA2',15, 16, 0.17,1.5,'Plastico','blanca', FormaMacetero.Circular),
                     new Macetero(3,'macetero verde',['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10,'macetero de alta gama', TipoProductos.Macetero,0,500,'MA3',15, 16, 0.17,1.5,'madeta','verde', FormaMacetero.Rectangular),
                     new Macetero(4,'macetero azul',['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'macetero interior', TipoProductos.Macetero,0,0,'MA4',15, 16, 0.17,1.5,'Plastico','azul', FormaMacetero.Circular),
                     new Macetero(5,'macetero amarillo',['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10,'macetero de alta gama', TipoProductos.Macetero,0,500,'MA5',15, 16, 0.17,1.5,'madera','amarillo', FormaMacetero.Rectangular),
                     new Macetero(6,'macetero celeste',['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'macetero interior', TipoProductos.Macetero,0,250,'MA6',15, 16, 0.17,1.5,'Plastico','celeste', FormaMacetero.Circular),
                     new Macetero(7,'macetero rosa',['http://lugar.com/imagen_m1.png'], 0, 1500, ['Arica a Pta.Arenas'], 10,'macetero de alta gama', TipoProductos.Macetero,0,320,'MA7',15, 16, 0.17,1.5,'Plastico','rosa', FormaMacetero.Rectangular),
                     new Macetero(8,'macetero plomo',['http://lugar.com/imagen_m2.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'macetero interior', TipoProductos.Macetero,0,0,'MA8',15, 16, 0.17,1.5,'cemento','plomo', FormaMacetero.Circular)
                    ];
    
    
  }

  obtCantidadMaceteros() {
    const cantidadMaceteros= this.maceteros.length;
    return  cantidadMaceteros;
  }
  createCodigoMacetero(){
    const numeroCodigo =  this.obtCantidadMaceteros() + 1;
    const codigoMacetero = 'MA' + numeroCodigo;
    return codigoMacetero
  }

  create(createMaceteroDto: CreateMaceteroDto, idProducto: number, codigoProducto:string) {
    const creMacetero: Macetero = new  Macetero(  idProducto,createMaceteroDto.nombreProducto,
                                                  createMaceteroDto.imagenProducto,
                                                  createMaceteroDto.descuento,
                                                  createMaceteroDto.precioNormal, 
                                                  createMaceteroDto.coberturaDeDespacho,
                                                  createMaceteroDto.stock,
                                                  createMaceteroDto.descripcionProducto,
                                                  TipoProductos.Macetero,
                                                  0,
                                                  0,
                                                  codigoProducto,
                                                  createMaceteroDto.alto,
                                                  createMaceteroDto.ancho,
                                                  createMaceteroDto.peso,
                                                  createMaceteroDto.capacidad,
                                                  createMaceteroDto.material,
                                                  createMaceteroDto.color,
                                                  createMaceteroDto.forma);

    this.maceteros.push(creMacetero);
    return creMacetero;
  }


  findAll() {
    return this.maceteros;
  }

  findOne(id: number) {
    const maceteroEncontrado = this.maceteros.find(prod=>prod.idProducto === id);
    //console.log(maceteroEncontrado);  
    if(maceteroEncontrado){
      return maceteroEncontrado;
    }
    return  null;
  }

  update(id: number, updateMaceteroDto: UpdateMaceteroDto) {
    return `This action updates a #${id} macetero`;
  }

  remove(id: number) {
    return `This action removes a #${id} macetero`;
  }
}
