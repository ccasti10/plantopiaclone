import { Injectable } from '@nestjs/common';
import { ControlPlagas } from '../entities/control-plagas.entity';
import { TipoProductos } from 'src/productos/entities/enum-productos';
import { Eficacia, MetodoAplicacion, TipoPlaga } from '../entities/enum-control-plagas';
import { CreateControlPlagasDto } from '../dto/create-control-plagas.dto';

@Injectable()
export class ControlPlagasService {
  controlPlagas: ControlPlagas[] = [];
  constructor() { 
    this.controlPlagas =  [
      new ControlPlagas(14,'control plaga prueba 1',['http://lugar.com/imagen_cp1.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'no tiene', TipoProductos.ControlPlagas,0,2500,'CP1',[TipoPlaga.COCHINILLAS, TipoPlaga.ACAROS],'50 ml de fosforo',[MetodoAplicacion.RIEGO],'cada 2 horas','lejos de nños',Eficacia.ALTA,true),
      new ControlPlagas(15,'control plaga prueba 1',['http://lugar.com/imagen_cp1.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'no tiene', TipoProductos.ControlPlagas,0,2500,'CP1',[TipoPlaga.ESCAMAS, TipoPlaga.HONGOS_MILDIU],'50 ml de fisfato',[MetodoAplicacion.CERCA_PLANTAS_AFECTADAS],'cada 2 dias','lejos de nños',Eficacia.ALTA,true)
  

    ];
  }

 


  create(
    createControlPlagasDto: CreateControlPlagasDto,
    idProducto: number,
    codigoProducto: string,
  ) {
    const creControlPLagas: ControlPlagas = new ControlPlagas(
      idProducto,
      createControlPlagasDto.nombreProducto,
      createControlPlagasDto.imagenProducto,
      createControlPlagasDto.descuento,
      createControlPlagasDto.precioNormal,
      createControlPlagasDto.coberturaDeDespacho,
      createControlPlagasDto.stock,
      createControlPlagasDto.descripcionProducto,
      TipoProductos.ControlPlagas,
      0,
      0,
      codigoProducto,
      createControlPlagasDto.TipoPlagaControlada,
      createControlPlagasDto.composicion,
      createControlPlagasDto.metodoAplicacion,
      createControlPlagasDto.frecuenciaAplicacion,
      createControlPlagasDto.precauciones,
      createControlPlagasDto.eficacia,
      createControlPlagasDto.Toxicidad,
    );

    this.controlPlagas.push(creControlPLagas);
    return creControlPLagas;
  }

  obtCantidadControlPlagas() {
    const cantidadControlPLagas = this.controlPlagas.length;
    return cantidadControlPLagas;
  }
  createCodigoControlPlagas() {
    const numeroCodigo = this.obtCantidadControlPlagas() + 1;
    const codigoControlPlagas = 'CP' + numeroCodigo;
    return codigoControlPlagas;
  }

  

  findAll() {
    return this.controlPlagas;
  }

  findOne(id: number) {
    const controlPlagaEncontrado = this.controlPlagas.find(prod=>prod.idProducto === id);
    //console.log(controlPlagaEncontrado);  
    if(controlPlagaEncontrado){
      return controlPlagaEncontrado;
    }
    return  null;
  }

   
}
