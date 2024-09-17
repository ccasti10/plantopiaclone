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
   this.maceteros = [
                      new Macetero( 11, 'Macetero de plástico redondo 40 cm', ['https://www.sodimac.cl/sodimac-cl/product/267970X/Macetero-circular-plastico-40-cm-Gris/267970X'],10,14990, ['Arica a Pta.Arenas'],20,'Macetero redondo de plástico, ideal para interiores y exteriores.',TipoProductos.Macetero, 4.5, 150,'MA1', 40,40,1.5,15,'Plástico', 'Gris',FormaMacetero.Rectangular ),
                      new Macetero( 28,'Macetero cerámica grande', ['https://www.paris.cl/macetero-de-ceramica-grande-955204999.html'], 15,24990, ['Arica a Pta.Arenas'], 10,'Macetero de cerámica de diseño moderno.',TipoProductos.Macetero,4.7,80,'MA2',45,35,7,25,'Cerámica','Blanco',FormaMacetero.Circular  ),
                      new Macetero( 29, 'Macetero colgante fibra natural',['https://www.falabella.com/falabella-cl/product/881594174/Macetero-colgante-de-fibra-natural/881594174'], 5,9990,['Arica a Pta.Arenas'], 30,'Macetero colgante de fibra natural.', TipoProductos.Macetero, 4.2, 120,'MA3',30,25,0.8, 8,'Fibra natural', 'Beige',FormaMacetero.Circular ),
                      new Macetero( 30, 'Macetero metálico con soporte', ['https://www.easy.cl/tienda/producto/macetero-metal-con-soporte-urban-xl-negro-1282984'], 20, 29990, ['Arica a Pta.Arenas'], 5, 'Macetero de metal con soporte de madera.', TipoProductos.Macetero, 4.8, 50,'MA4', 50,30,5,20,'Metal', 'Negro',FormaMacetero.Rectangular ),
                      new Macetero( 31,'Macetero cuadrado de cemento', ['https://www.sodimac.cl/sodimac-cl/product/1154031/Macetero-cemento-cubo-35x35-cm-Gris/1154031'],12,18990,['Arica a Pta.Arenas'],  15,'Macetero de cemento con acabado rústico.',TipoProductos.Macetero,4.6, 60, 'MA5',35, 35, 9,18,'Cemento','Gris oscuro',FormaMacetero.Circular )
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
