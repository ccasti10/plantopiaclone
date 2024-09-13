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
   this.sustratos = [new Sustrato(16,'Mezcla para plantas de interior con perlita',['http://lugar.com/imagen_s1.png'],0,25000,['Arica a Pta.Arenas'],1500,'Ideal para plantas de interior que necesitan drenaje',TipoProductos.Sustratos,0,481,'SU1', [ComposicionSustrato.TURBA,ComposicionSustrato.PERLITA],	 [TexturaSustrato.LIGERO, TexturaSustrato.AIREADO], RetencionHumedad.MEDIA,TipoPlantasRecomendadas.PLANTAS_INTERIOR,'Ideal para plantas de interior que necesitan un buen equilibrio entre retención de humedad y drenaje'),
                     new Sustrato(17,'Sustrato con turba y perlita',	['http://lugar.com/imagen_s1.png'],0,25000,['Arica a Pta.Arenas'],1500,'Ideal para plantas de interior que necesitan drenaje',TipoProductos.Sustratos,0,481,'SU2',  [ComposicionSustrato.TURBA,ComposicionSustrato.PERLITA,ComposicionSustrato.VERMICULITA], [TexturaSustrato.LIGERO, TexturaSustrato.AIREADO],RetencionHumedad.ALTA,TipoPlantasRecomendadas.ORQUIDIAS ,'Plantas de interior con requerimientos moderados de humedad	Adecuado para plantas que requieren alta retención de humedad con buen drenaje.'),
                     new Sustrato(18,'Sustrato con turba y perlita',	['http://lugar.com/imagen_s1.png'],0,25000,['Arica a Pta.Arenas'],1500,'Ideal para plantas de interior que necesitan drenaje',TipoProductos.Sustratos,0,481,'SU2',  [ComposicionSustrato.TURBA,ComposicionSustrato.PERLITA,ComposicionSustrato.VERMICULITA], [TexturaSustrato.LIGERO, TexturaSustrato.AIREADO],RetencionHumedad.ALTA,TipoPlantasRecomendadas.PLANTAS_INTERIOR ,'Plantas de interior con requerimientos moderados de humedad	Adecuado para plantas que requieren alta retención de humedad con buen drenaje.')
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
