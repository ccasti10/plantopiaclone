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
    new Fertilizante(12,'fetilizante prueba 1',['http://lugar.com/imagen_f1.png'], 0, 2500, ['Arica a Pta.Arenas'], 10,'no tiene', TipoProductos.Fertilizantes,0,500,'FE1','FERTI1',TipoFertizante.EQUILIBRADO_LIQUIDO, 'Todos los dias','500 mg','´carga3',TipoPlantasRecomendadas.ORQUIDIAS),
    new Fertilizante(13,'fetilizante prueba 2',['http://lugar.com/imagen_f2.png'], 0, 1500, ['Arica a Pta.Arenas'], 10,'tampoco tiene', TipoProductos.Fertilizantes,0,500,'FE2','FERTI2',TipoFertizante.EQUILIBRADO_LIQUIDO, 'Todos los dias','500 mg','´carga3',TipoPlantasRecomendadas.ORQUIDIAS),
    
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
