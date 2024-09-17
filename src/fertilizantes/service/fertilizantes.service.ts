import { Injectable } from '@nestjs/common';

import { FrecuenciaDeRiego } from 'src/plantas/entities/enum-plantas';
import { Fertilizante } from '../entities/fertilizante.entity';
import { TipoProductos } from 'src/productos/entities/enum-productos';
import { TipoFertizante, TipoPlantasRecomendadas } from '../entities/enum-fertilizantes';
import { CreateFertilizanteDto } from '../dto/create-fertilizante.dto';

@Injectable()
export class FertilizantesService {
  fertilizantes:Fertilizante[]=[]
  constructor()
  {
  this.fertilizantes =[  
    new Fertilizante(6,'Fertilizante equilibrado 20-20-20', [ 'https://whenua.cl/products/mix-full-jardin?variant=44250285670678' ], 0, 6490,['Arica a Pta.Arenas'], 50, 'Fertilizante equilibrado con NPK 20-20-20 para plantas de interior.', TipoProductos.Fertilizantes, 4.8,120,'FE1', '20-20-20', TipoFertizante.EQUILIBRADO_LIQUIDO, 'Cada 2 semanas en primavera y verano','500 cc','Adecuado para plantas que requieren un balance NPK equilibrado.',TipoPlantasRecomendadas.PLANTAS_INTERIOR),
    new Fertilizante(7,'Fertilizante líquido para follaje',['https://bestgarden.cl/fertilizantes/23-fertilizante-follaje-y-floracion-listo-para-usar-1lt-7804630000903.html' ], 0,2490,['Arica a Pta.Arenas'],80, 'Fertilizante líquido especializado para plantas de follaje.', TipoProductos.Fertilizantes, 4.5, 95,'FE2','10-10-10',TipoFertizante.LIQUIDO_FOLLAJE, 'Cada 4-6 semanas','1000 cc','Especial para hojas verdes y sanas.', TipoPlantasRecomendadas.PLANTAS_FOLLAJE),
    new Fertilizante(8,'Fertilizante balanceado 10-10-10',['https://www.plantin.cl/product-page/npk-granulado'], 0,1990, ['Arica a Pta.Arenas'],60,'Fertilizante granulado balanceado con NPK 10-10-10 para plantas de interior.',TipoProductos.Fertilizantes,4.3, 70, 'FE3','10-10-10',TipoFertizante.GRANULADO_BALANCEADO,'Cada 3 semanas', '1 kg','Ideal para uso general en interiores.',TipoPlantasRecomendadas.PLANTAS_INTERIOR),
    new Fertilizante(9,'Fertilizante orgánico',['https://tiendachagual.cl/producto/fertilizante-organico-mix-full/?utm_source=Google%20Shopping&utm_campaign=Productos%20Chagual%202022&utm_medium=cpc&utm_term=35101&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOcY7WGdjzwd0qg5DGf-FTyDIK34eUea2IXNJST8pYpKmmw0UbSpCYaArCQEALw_wcB'], 0,7500,['Arica a Pta.Arenas'], 40, 'Fertilizante orgánico granular para plantas en general.',TipoProductos.Fertilizantes, 4.6, 90, 'FE4', 'Variable (orgánico)', TipoFertizante.ORGANIZO_GRANULAR,'Cada 4 semanas','500 cc','Asegurar un buen drenaje al aplicarlo.', TipoPlantasRecomendadas.PLANTAS_GENERAL_ORGANICO),
    new Fertilizante(10,"Fertilizante para suculentas", ["https://www.sodimac.cl/sodimac-cl/articulo/110132792/Fertilizante-para-cactus-y-suculentas-200-gr-bolsa/110132793?kid=goosho_373415&shop=googleShopping&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPwkZa67TWdg8rQbU0e6r2ncQaou4VHDaBCt0LpyXiCNPLS-NHCFtUaAi7vEALw_wcB"], 0,1990, ['Arica a Pta.Arenas'], 90,"Evitar el exceso para prevenir quemaduras en raíces.",TipoProductos.Fertilizantes,4.4, 130,    "FE5","4-6-2008", TipoFertizante.LIQUIDO_SUCULENTAS,"Cada 2 meses","200 g","Evitar el exceso para prevenir quemaduras en raíces.", TipoPlantasRecomendadas.SUCULENTAS)
   ];
   
  }






  obtCantidadFertilizantes() {
    const cantidadFertilizantes= this.fertilizantes.length;
    return  cantidadFertilizantes;
  }
  createCodigoFertilizantes(){
    const numeroCodigo =  this.obtCantidadFertilizantes() + 1;
    const codigoFertilizante = 'FE' + numeroCodigo;
    return codigoFertilizante
  }


   create(createFertilizanteDto: CreateFertilizanteDto, idProducto: number, codigoProducto:string) {
    const creFertilizante: Fertilizante = new  Fertilizante(  idProducto,createFertilizanteDto.nombreProducto,
                                                  createFertilizanteDto.imagenProducto,
                                                  createFertilizanteDto.descuento,
                                                  createFertilizanteDto.precioNormal, 
                                                  createFertilizanteDto.coberturaDeDespacho,
                                                  createFertilizanteDto.stock,
                                                  createFertilizanteDto.descripcionProducto,
                                                  TipoProductos.Fertilizantes,
                                                  0,
                                                  0,
                                                  codigoProducto,
                                                  createFertilizanteDto.composición, 
                                                  createFertilizanteDto.tipo, 
                                                  createFertilizanteDto.frecuenciaAplicacion, 
                                                  createFertilizanteDto.presentacion, 
                                                  createFertilizanteDto.observaciones, 
                                                  createFertilizanteDto.tiposPlantasRecomendadas 
                                                );

    this.fertilizantes.push(creFertilizante);
    return creFertilizante;
  }

 
  findAll() {
    return this.fertilizantes;
  }

  findOne(id: number) {
    const fertilizanteEncontrado = this.fertilizantes.find(prod=>prod.idProducto === id);
   // console.log(fertilizanteEncontrado);  
    if(fertilizanteEncontrado){
      return fertilizanteEncontrado;
    }
    return  null;
  }

   
}
