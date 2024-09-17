import { Injectable } from '@nestjs/common';
import { CreateSustratoDto } from '../dto/create-sustrato.dto';
import { UpdateSustratoDto } from '../dto/update-sustrato.dto';
import { Sustrato } from '../entities/sustrato.entity';
import { ComposicionSustrato, RetencionHumedad, TexturaSustrato } from '../entities/enum-sustratos';
import { TipoProductos } from 'src/productos/entities/enum-productos';
import { TipoPlantasRecomendadas } from 'src/fertilizantes/entities/enum-fertilizantes';

@Injectable()
export class SustratosService {
  sustratos:Sustrato[]=[];
  constructor(){
   this.sustratos = [ 
                     new Sustrato(32, "Sustrato Universal Nutritivo",["https://sodimac.scene7.com/is/image/SodimacCL/4764071?wid=800&hei=800&qlt=70"],0, 4990,["Arica a Pta.Arenas"],50,"Sustrato universal ideal para todo tipo de plantas.",TipoProductos.Sustratos,4.5,1000,"SU1",[ComposicionSustrato.TURBA, ComposicionSustrato.MATERIAORGANICA],[TexturaSustrato.SUELTO, TexturaSustrato.MEDIO],"Buen drenaje",TipoPlantasRecomendadas.PLANTAS_INTERIOR,"Ideal para plantas de interior y exterior."),
                     new Sustrato(33,"Sustrato para Cactus y Suculentas",["https://sodimac.scene7.com/is/image/SodimacCL/4784856?wid=800&hei=800&qlt=70"],0,2990,["Arica a Pta.Arenas"],30,"Sustrato especializado para cactus y suculentas.",TipoProductos.Sustratos,4.8,1500,"SU2",[ComposicionSustrato.ARENA, ComposicionSustrato.GRAVA],[TexturaSustrato.GRUESO],"Excelente drenaje",TipoPlantasRecomendadas.SUCULENTASCACTUS,"Previene la acumulación de agua en las raíces."),
                     new Sustrato(34,"Sustrato para Orquídeas",["https://sodimac.scene7.com/is/image/SodimacCL/4764075?wid=800&hei=800&qlt=70"],0,5990,["Arica a Pta.Arenas"],40,"Sustrato especial para el cultivo de orquídeas.",TipoProductos.Sustratos,4.7,800,"SU3",[ComposicionSustrato.CORTEZA, ComposicionSustrato.CARBON_VEGETAL],[TexturaSustrato.FINA],"Drenaje moderado",TipoPlantasRecomendadas.ORQUIDIAS,"Optimiza la aireación de las raíces."),
                     new Sustrato(35,"Sustrato para Huerto Urbano",["https://sodimac.scene7.com/is/image/SodimacCL/4764084?wid=800&hei=800&qlt=70"],0,7990,["Arica a Pta.Arenas"],25,"Sustrato para el cultivo de hortalizas en huertos urbanos.",TipoProductos.Sustratos,4.6,1200,"SU4",[ComposicionSustrato.HUMMUS, ComposicionSustrato.COMPOST],[TexturaSustrato.MEDIO],"Drenaje excelente",TipoPlantasRecomendadas.HORTALIZAS,"Rico en nutrientes esenciales."),
                     new Sustrato(36,"Sustrato para Bonsái",["https://sodimac.scene7.com/is/image/SodimacCL/4764068?wid=800&hei=800&qlt=70"],0,8990,["Arica a Pta.Arenas"],20,"Sustrato especializado para bonsáis.",TipoProductos.Sustratos,4.9,600,"SU5",[ComposicionSustrato.ARENA_VOLCANICA, ComposicionSustrato.GRAVA],[TexturaSustrato.GRUESO],"Drenaje óptimo",TipoPlantasRecomendadas.BONSAI, "Permite el desarrollo adecuado de raíces." )
                  ];

               
  }
  obtCantidad() {
    const cantidad = this.sustratos.length;
    return  cantidad;
  }
  createCodigo(){
    const numeroCodigo =  this.obtCantidad() + 1;
    const codigo = 'SU' + numeroCodigo;
    return codigo
  }

  create(cretaSustratoDto: CreateSustratoDto, idProducto: number, codigoProducto:string) {
    const creSustrato: Sustrato = new  Sustrato(  idProducto,cretaSustratoDto.nombreProducto,
                                                  cretaSustratoDto.imagenProducto,
                                                  cretaSustratoDto.descuento,
                                                  cretaSustratoDto.precioNormal, 
                                                  cretaSustratoDto.coberturaDeDespacho,
                                                  cretaSustratoDto.stock,
                                                  cretaSustratoDto.descripcionProducto,
                                                  TipoProductos.Sustratos,
                                                  0,
                                                  0,
                                                  codigoProducto,
                                                  cretaSustratoDto.composicion,
                                                  cretaSustratoDto.textura,
                                                  cretaSustratoDto.drenaje,
                                                  cretaSustratoDto.plantasRecomendadas,
                                                  cretaSustratoDto.observaciones
                                                  
                                                  );

    this.sustratos.push(creSustrato);
    return creSustrato;
  }


  findAll() {
    return this.sustratos;
  }
  findOne(id: number) {
    const sustratoEncontrado = this.sustratos.find(prod=>prod.idProducto === id);
    // console.log(sustratoEncontrado);  
     if(sustratoEncontrado){
       return sustratoEncontrado;
     }
     return  null;
  }

  update(id: number, updateSustratoDto: UpdateSustratoDto) {
    return `This action updates a #${id} sustrato`;
  }

  remove(id: number) {
    return `This action removes a #${id} sustrato`;
  }
}
