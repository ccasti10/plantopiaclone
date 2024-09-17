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
    new ControlPlagas(1, 'Aceite de neem',['https://autoherb.cl/producto/aceite-neem/'], 0, 5000, ['Arica a Pta.Arenas'], 100,'Aceite para el control de plagas como pulgones, cochinillas y ácaros.',TipoProductos.ControlPlagas, 4.5,50,'CP1', [TipoPlaga.PULGONES, TipoPlaga.COCHINILLAS ,TipoPlaga.ACAROS], 'Aceite de neem (azadiractina)', [MetodoAplicacion.SPRAY_FOLIAR], 'Cada 7-14 días según la infestación', 'Seguridad para mascotas, evitar el contacto con los ojos y piel.',   Eficacia.ALTA,true ),
    new ControlPlagas(2 , 'Jabon potásico', ['https://www.jumbo.cl/jabon-potasico-popeye-ecofriendly-1-l-1901730/p?idsku=117690&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPffNH36xHASuTqi98qIqqiz7N_GOLKxuLmhU7hGgN6gBUbQgV1O_4aAgH8EALw_wcB&gclsrc=aw.ds']    , 0,3000,['Arica a Pta.Arenas'],150,'Jabón potásico para control de pulgones, mosca blanca y cochinillas.', TipoProductos.ControlPlagas,4.2,30,'CP2',[TipoPlaga.PULGONES,TipoPlaga.MOSCA_BLANCA,TipoPlaga.COCHINILLAS],'Sales potásicas',[MetodoAplicacion.SPRAY_FOLIAR], 'Cada 7 días hasta controlar la plaga','Seguro para mascotas y plantas, evitar sobredosificación.',Eficacia.MEDIA,true),
    new ControlPlagas(3, 'Tierra de diatomeas', ['https://www.deraizchile.cl/products/diatomeas-jardines-y-fertilizantes?variant=40835675259062&currency=CLP&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPvAS6Eb97Wl4miGn-B-HeFm6nRTFNtATS0-mP-MKIdWWhQ7y9eitwaAgwFEALw_wcB' ], 0, 8000, ['Arica a Pta.Arenas'], 120, 'Polvo de silicio para control de hormigas, cochinillas y pulgones.', TipoProductos.ControlPlagas, 4.7, 40,'CP3', [TipoPlaga.HORMIGAS,TipoPlaga.COCHINILLAS,TipoPlaga.PULGONES], 'Silicio (polvo)', [MetodoAplicacion.ESPOLVOREADO_SUELO], 'Aplicación única, repetir si es necesario', 'Evitar inhalación, uso de guantes recomendado.', Eficacia.ALTA, true),
    new ControlPlagas( 4,'Fungicida de azufre',    [ 'https://tiendachagual.cl/producto/sulforte-500ml-chakrana/?utm_source=Google%20Shopping&utm_campaign=Productos%20Chagual%202022&utm_medium=cpc&utm_term=68050&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOSrPBfmZhyKTaVJCwCxewtoNwJWqUJCVBGF_6mf6ujxECLzIBLgGkaApoMEALw_wcB'], 0, 7000, ['Arica a Pta.Arenas'], 80,'Azufre micronizado para hongos como mildiu y oídio.', TipoProductos.ControlPlagas, 4.4, 60, 'CP4', [TipoPlaga.HONGOS_MILDIU],'Azufre micronizado', [MetodoAplicacion.SPRAY_FOLIAR, MetodoAplicacion.APLICACION_SUELO], 'Cada 10-14 días durante la temporada','Evitar inhalación y contacto con ojos.',  Eficacia.MEDIA, true),
    new ControlPlagas( 5,'Aceite de horticultura', [  'https://www.amazon.com/-/es/Fertiloma-16042-Aceite-horticultura-Listado/dp/B0BLRLCB9N' ],0,6000,['Arica a Pta.Arenas'],90,'Aceite mineral para el control de ácaros, cochinillas y escamas.',TipoProductos.ControlPlagas,4.6,35, 'CP5', [TipoPlaga.ACAROS, TipoPlaga.COCHINILLAS, TipoPlaga.ESCAMAS],'Aceite mineral',[MetodoAplicacion.SPRAY_FOLIAR],'Cada 7-10 días', 'Aplicar en lugares ventilados, puede ser irritante.', Eficacia.ALTA,true)
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
