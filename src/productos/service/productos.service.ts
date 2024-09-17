import { Injectable } from '@nestjs/common';
import { CreateMaceteroDto } from 'src/maceteros/dto/create-macetero.dto';
import { CreatePlantaDto } from 'src/plantas/dto/create-planta.dto';
import { CreateControlPlagasDto } from 'src/control-plagas/dto/create-control-plagas.dto';

import { ErrorPlantopia } from 'src/comunes/error-plantopia/error-plantopia';
import { Producto } from '../entities/producto.entity';
import { TipoProductos } from '../entities/enum-productos';
import { MaceterosService } from 'src/maceteros/service/maceteros.service';

import { CreateFertilizanteDto } from 'src/fertilizantes/dto/create-fertilizante.dto';

import { CreateSustratoDto } from 'src/sustratos/dto/create-sustrato.dto';
import { SustratosService } from 'src/sustratos/service/sustratos.service';
import { createReadStream } from 'fs';
import { TexturaSustrato } from 'src/sustratos/entities/enum-sustratos';
import { create } from 'domain';
import { ControlPlagasService } from 'src/control-plagas/service/control-plagas.service';
import { FertilizantesService } from 'src/fertilizantes/service/fertilizantes.service';
import { PlantasService } from 'src/plantas/service/plantas.service';

@Injectable()
export class ProductosService {
  productos: Producto[] = [];
  constructor(
    private readonly servicioMaceteros: MaceterosService,
    private readonly servicioPLantas: PlantasService,
    private readonly servicioControlPlagas: ControlPlagasService,
    private readonly servicioFertilizantes: FertilizantesService,
    private readonly servicioSustratos: SustratosService,
  ) {
    this.productos = [
      new Producto(  1,'Aceite de neem',['https://autoherb.cl/producto/aceite-neem/'], 0, 5000, ['Arica a Pta.Arenas'], 100,'Aceite para el control de plagas como pulgones, cochinillas y ácaros.',TipoProductos.ControlPlagas, 4.5,50,'CP1'),
      new Producto(  2,'Jabón potásico', ['https://www.jumbo.cl/jabon-potasico-popeye-ecofriendly-1-l-1901730/p?idsku=117690&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPffNH36xHASuTqi98qIqqiz7N_GOLKxuLmhU7hGgN6gBUbQgV1O_4aAgH8EALw_wcB&gclsrc=aw.ds'],0,3000,['Arica a Pta.Arenas'],150,'Jabón potásico para control de pulgones, mosca blanca y cochinillas.', TipoProductos.ControlPlagas,4.2,30,'CP2'),
      new Producto(  3,'Tierra de diatomeas', ['https://www.deraizchile.cl/products/diatomeas-jardines-y-fertilizantes?variant=40835675259062&currency=CLP&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPvAS6Eb97Wl4miGn-B-HeFm6nRTFNtATS0-mP-MKIdWWhQ7y9eitwaAgwFEALw_wcB' ], 0, 8000, ['Arica a Pta.Arenas'], 120, 'Polvo de silicio para control de hormigas, cochinillas y pulgones.', TipoProductos.ControlPlagas, 4.7, 40,'CP3'),
      new Producto(  4,'Fungicida de azufre',    [ 'https://tiendachagual.cl/producto/sulforte-500ml-chakrana/?utm_source=Google%20Shopping&utm_campaign=Productos%20Chagual%202022&utm_medium=cpc&utm_term=68050&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOSrPBfmZhyKTaVJCwCxewtoNwJWqUJCVBGF_6mf6ujxECLzIBLgGkaApoMEALw_wcB'], 0, 7000, ['Arica a Pta.Arenas'], 80,'Azufre micronizado para hongos como mildiu y oídio.', TipoProductos.ControlPlagas, 4.4, 60, 'CP4'),
      new Producto(  5,'Aceite de horticultura', [  'https://www.amazon.com/-/es/Fertiloma-16042-Aceite-horticultura-Listado/dp/B0BLRLCB9N' ],0,6000,['Arica a Pta.Arenas'],90,'Aceite mineral para el control de ácaros, cochinillas y escamas.',TipoProductos.ControlPlagas,4.6,35, 'CP5'),
      new Producto(  6,'Fertilizante equilibrado 20-20-20', [ 'https://whenua.cl/products/mix-full-jardin?variant=44250285670678' ], 0, 6490,['Arica a Pta.Arenas'], 50, 'Fertilizante equilibrado con NPK 20-20-20 para plantas de interior.', TipoProductos.Fertilizantes, 4.8,120,'FE1'),
      new Producto(  7,'Fertilizante líquido para follaje',['https://bestgarden.cl/fertilizantes/23-fertilizante-follaje-y-floracion-listo-para-usar-1lt-7804630000903.html' ], 0,2490,['Arica a Pta.Arenas'],80, 'Fertilizante líquido especializado para plantas de follaje.', TipoProductos.Fertilizantes, 4.5, 95,'FE2'),
      new Producto(  8,'Fertilizante balanceado 10-10-10',['https://www.plantin.cl/product-page/npk-granulado'], 0,1990, ['Arica a Pta.Arenas'],60,'Fertilizante granulado balanceado con NPK 10-10-10 para plantas de interior.',TipoProductos.Fertilizantes,4.3, 70, 'FE3'),
      new Producto(  9,'Fertilizante orgánico',['https://tiendachagual.cl/producto/fertilizante-organico-mix-full/?utm_source=Google%20Shopping&utm_campaign=Productos%20Chagual%202022&utm_medium=cpc&utm_term=35101&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnOcY7WGdjzwd0qg5DGf-FTyDIK34eUea2IXNJST8pYpKmmw0UbSpCYaArCQEALw_wcB'], 0,7500,['Arica a Pta.Arenas'], 40, 'Fertilizante orgánico granular para plantas en general.',TipoProductos.Fertilizantes, 4.6, 90, 'FE4'),
      new Producto( 10,"Fertilizante para suculentas", ["https://www.sodimac.cl/sodimac-cl/articulo/110132792/Fertilizante-para-cactus-y-suculentas-200-gr-bolsa/110132793?kid=goosho_373415&shop=googleShopping&gad_source=1&gclid=Cj0KCQjww5u2BhDeARIsALBuLnPwkZa67TWdg8rQbU0e6r2ncQaou4VHDaBCt0LpyXiCNPLS-NHCFtUaAi7vEALw_wcB"], 0,1990, ['Arica a Pta.Arenas'], 90,"Evitar el exceso para prevenir quemaduras en raíces.",TipoProductos.Fertilizantes,4.4, 130,    "FE5"),
      new Producto( 11,'Macetero de plástico redondo 40 cm', ['https://www.sodimac.cl/sodimac-cl/product/267970X/Macetero-circular-plastico-40-cm-Gris/267970X'],10,14990, ['Arica a Pta.Arenas'],20,'Macetero redondo de plástico, ideal para interiores y exteriores.',TipoProductos.Macetero, 4.5, 150,'MA1'),
      new Producto( 12,'Cactus Opuntia',['https://acdn.mitiendanube.com/stores/001/202/679/products/opuntia-microdasys-amarilla11-f96f80e136ac2b347816196560098082-1024-1024.webp'], 10, 8360, ['Arica a Pta.Arenas'], 10,'Es un cactus firme y decorativo.',TipoProductos.Planta, 4, 150,'PL1' ),
      new Producto( 13,'Lengua de Suegra',['https://lepotit.cl/cdn/shop/products/SansevieriaMAutorreganteSblanco_860x.jpg?v=1633118960', ],  12,  12900, ['Arica a Pta.Arenas'], 55,'Es una planta de interior popular.',  TipoProductos.Planta,  1, 100, 'PL2' ),
      new Producto( 14,'Lirio de Agua', ['https://acdn.mitiendanube.com/stores/001/202/679/products/231-ad700e1f90d14e71ed16246336798562-1024-1024.webp', ],   20, 8360, ['Arica a Pta.Arenas'], 12,'Es una planta acuática decorativa.', TipoProductos.Planta, 4, 120, 'PL3'  ),
      new Producto( 15,'Monstera deliciosa',['https://www.kenaz.cl/cdn/shop/products/monstera-946603.jpg?v=1718161088&width=600', ], 17, 7456,['Arica a Pta.Arenas'],10,'Es una planta tropical ideal para interiores.', TipoProductos.Planta,3,130,'PL4' ),
      new Producto( 16,'Helecho', ['https://cdnx.jumpseller.com/mentaconcept/image/41835179/resize/480/480?1699388964',],18, 9000, ['Arica a Pta.Arenas'], 32,'Es una planta común en ambientes húmedos.',TipoProductos.Planta, 2, 180,'PL5' ),
      new Producto( 17,'Ficus lyrata', ['https://viverolosaromos.com/wp-content/uploads/2023/11/EXALTATA-HELECHO-510x510.webp', ], 22,5779, ['Arica a Pta.Arenas'], 20,'Es una planta popular de gran tamaño.',TipoProductos.Planta, 5, 300,'PL6' ),
      new Producto( 18,'Filodendro Longipetiolatum', [ 'https://www.kenaz.cl/cdn/shop/products/peperomia-cucharita-561186.jpg?v=1701109062&width=600', ], 30, 5320,['Arica a Pta.Arenas'], 100,'Es una planta tropical común.', TipoProductos.Planta,1,90,'PL7' ),
      new Producto( 19,'Peperomia obtusifolia',  [ 'https://d17jkdlzll9byv.cloudfront.net/wp-content/uploads/2023/06/ficus-lyrata-0002-900x900.jpg',  ], 25, 9425, ['Arica a Pta.Arenas'], 34,'Es una planta compacta y popular en interiores.', TipoProductos.Planta, 2, 120,'PL8' ),
      new Producto( 20,'Pilea peperomioides', ['https://www.aprilplants.com/cdn/shop/products/Eucalipto_silver_dollar_copa_22o_cocoblanca_planta-de-exterior-aromatica_1024x.jpg?v=1679046875', ], 40, 7530, ['Arica a Pta.Arenas'],  25, 'Es una planta compacta y decorativa.',TipoProductos.Planta, 1,100,'PL9' ),
      new Producto( 21,'Dollar variegado', ['https://d17jkdlzll9byv.cloudfront.net/wp-content/uploads/2024/02/philodendron-longifolio-00001.jpg', ], 30, 6900,['Arica a Pta.Arenas'], 50,'Es una planta tropical de hojas variegadas.', TipoProductos.Planta, 4, 200, 'PL10' ),
      new Producto( 22,'Oulluy', ['https://m.media-amazon.com/images/I/51rjakslj5L._AC_SX569_.jpg'],50,9120,['Arica a Pta.Arenas'],60, 'Es una planta suculenta decorativa.',TipoProductos.Planta, 5, 300,'PL11' ),
      new Producto( 23,'Begonia',['https://vitaflor.cl/wp-content/uploads/2022/12/aloe-striata-1536x1152.jpg.webp',], 30, 1110, ['Arica a Pta.Arenas'], 100,'Es una planta ornamental común.',TipoProductos.Planta, 1, 100,'PL12' ),
      new Producto( 24,'Alocasia',['https://imgix.be.green/63860658cd20e331480209.jpg?w=1200&h=1200&auto=compress',],15,5150,['Arica a Pta.Arenas'],45,'Es una planta de interior elegante y tropical.',TipoProductos.Planta,1, 90,'PL13' ),
      new Producto( 25,'Syngonium', [ 'https://www.cactussuculovers.cl/wp-content/uploads/2020/08/086b3977-dab8-4a35-bbcd-0b93596504ce-copia.jpg',],18, 6150, ['Arica a Pta.Arenas'], 34,'Es una planta decorativa de hojas en forma de flecha.', TipoProductos.Planta, 2, 80,'PL14' ),
      new Producto( 26,'Pachira Aquatica',['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRD4KlhDv3R0dc7SRP8XjrDIRjumKFmpv1J6pA2tW_XQ6JgsXUl',],22,7530,['Arica a Pta.Arenas'],50,'Es una planta de interior con tronco decorativo.',TipoProductos.Planta,3,120,'PL15' ),
      new Producto( 27,'Begonia Rex', ['https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRD4KlhDv3R0dc7SRP8XjrDIRjumKFmpv1J6pA2tW_XQ6JgsXUl',],10, 6100,['Arica a Pta.Arenas'], 60,'Es una begonia decorativa con hojas de colores vivos.',TipoProductos.Planta, 2, 110,'PL16'),
      new Producto( 28,'Macetero cerámica grande', ['https://www.paris.cl/macetero-de-ceramica-grande-955204999.html'], 15,24990, ['Arica a Pta.Arenas'], 10,'Macetero de cerámica de diseño moderno.',TipoProductos.Macetero,4.7,80,'MA2'),
      new Producto( 29,'Macetero colgante fibra natural',['https://www.falabella.com/falabella-cl/product/881594174/Macetero-colgante-de-fibra-natural/881594174'], 5,9990,['Arica a Pta.Arenas'], 30,'Macetero colgante de fibra natural.', TipoProductos.Macetero, 4.2, 120,'MA3'),
      new Producto( 30,'Macetero metálico con soporte', ['https://www.easy.cl/tienda/producto/macetero-metal-con-soporte-urban-xl-negro-1282984'], 20, 29990, ['Arica a Pta.Arenas'], 5, 'Macetero de metal con soporte de madera.', TipoProductos.Macetero, 4.8, 50,'MA4' ),
      new Producto( 31,'Macetero cuadrado de cemento', ['https://www.sodimac.cl/sodimac-cl/product/1154031/Macetero-cemento-cubo-35x35-cm-Gris/1154031'],12,18990,['Arica a Pta.Arenas'],  15,'Macetero de cemento con acabado rústico.',TipoProductos.Macetero,4.6, 60, 'MA5' ),
      new Producto( 32, "Sustrato Universal Nutritivo",["https://sodimac.scene7.com/is/image/SodimacCL/4764071?wid=800&hei=800&qlt=70"],0, 4990,["Arica a Pta.Arenas"],50,"Sustrato universal ideal para todo tipo de plantas.",TipoProductos.Sustratos,4.5,1000,"SU1"),
      new Producto( 33,"Sustrato para Cactus y Suculentas",["https://sodimac.scene7.com/is/image/SodimacCL/4784856?wid=800&hei=800&qlt=70"],0,2990,["Arica a Pta.Arenas"],30,"Sustrato especializado para cactus y suculentas.",TipoProductos.Sustratos,4.8,1500,"SU2"),
      new Producto( 34,"Sustrato para Orquídeas",["https://sodimac.scene7.com/is/image/SodimacCL/4764075?wid=800&hei=800&qlt=70"],0,5990,["Arica a Pta.Arenas"],40,"Sustrato especial para el cultivo de orquídeas.",TipoProductos.Sustratos,4.7,800,"SU3"),
      new Producto( 35,"Sustrato para Huerto Urbano",["https://sodimac.scene7.com/is/image/SodimacCL/4764084?wid=800&hei=800&qlt=70"],0,7990,["Arica a Pta.Arenas"],25,"Sustrato para el cultivo de hortalizas en huertos urbanos.",TipoProductos.Sustratos,4.6,1200,"SU4"),
      new Producto( 36,"Sustrato para Bonsái",["https://sodimac.scene7.com/is/image/SodimacCL/4764068?wid=800&hei=800&qlt=70"],0,8990,["Arica a Pta.Arenas"],20,"Sustrato especializado para bonsáis.",TipoProductos.Sustratos,4.9,600,"SU5")


      
    ];
  }

  findAll() {
    return this.productos;
  }
  findbyType(categoria: TipoProductos) {
    if (categoria) {
      const produtos = this.productos.filter(
        (prod) => prod.categoria == categoria,
      );

      if (produtos.length > 0 && categoria == TipoProductos.Macetero) {
        return this.servicioMaceteros.findAll();
      } else if (produtos.length > 0 && categoria == TipoProductos.Planta) {
        return this.servicioPLantas.findAll();
      } else if (
        produtos.length > 0 &&
        categoria == TipoProductos.Fertilizantes
      ) {
        return this.servicioFertilizantes.findAll();
      } else if (
        produtos.length > 0 &&
        categoria == TipoProductos.ControlPlagas
      ) {
        return this.servicioControlPlagas.findAll();
      } else if (produtos.length > 0 && categoria == TipoProductos.Sustratos) {
        return this.servicioSustratos.findAll();
      }
    }
    return null;
  }
  obtCantidadProductos() {
    const cantidadProductos = this.productos.length;
    return cantidadProductos;
  }
  createMacetero(createMaceteroDto: CreateMaceteroDto) {
    const idProducto: number = this.obtCantidadProductos() + 1;
    const codigoProducto = this.servicioMaceteros.createCodigoMacetero();
    const productoMacetero: Producto = new Producto(
      idProducto,
      createMaceteroDto.nombreProducto,
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
    );

    this.productos.push(productoMacetero);
    const maceteroCreado = this.servicioMaceteros.create(
      createMaceteroDto,
      idProducto,
      codigoProducto,
    );
    return maceteroCreado;
  }

  createPlanta(createPlantaDto: CreatePlantaDto) {
    const idProducto: number = this.obtCantidadProductos() + 1;
    const codigoProducto = this.servicioPLantas.createCodigoPlanta();
    const productoPlanta: Producto = new Producto(
      idProducto,
      createPlantaDto.nombreProducto,
      createPlantaDto.imagenProducto,
      createPlantaDto.descuento,
      createPlantaDto.precioNormal,
      createPlantaDto.coberturaDeDespacho,
      createPlantaDto.stock,
      createPlantaDto.descripcionProducto,
      TipoProductos.Planta,
      0,
      0,
      codigoProducto,
    );

    this.productos.push(productoPlanta);
    const plantaCreada = this.servicioPLantas.create(
      createPlantaDto,
      idProducto,
      codigoProducto,
    );
    return plantaCreada;
  }

  createControlPlagas(createControlPlagasDto: CreateControlPlagasDto) {
    const idProducto: number = this.obtCantidadProductos() + 1;
    const codigoProducto =
      this.servicioControlPlagas.createCodigoControlPlagas();
    const productoControlPlagas: Producto = new Producto(
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
    );

    this.productos.push(productoControlPlagas);
    const controlPlagasCreado = this.servicioControlPlagas.create(
      createControlPlagasDto,
      idProducto,
      codigoProducto,
    );
    return controlPlagasCreado;
  }

  createFertilizante(createFertilizanteDto: CreateFertilizanteDto) {
    const idProducto: number = this.obtCantidadProductos() + 1;
    const codigoProducto =
      this.servicioFertilizantes.createCodigoFertilizantes();
    const productoFertilizante: Producto = new Producto(
      idProducto,
      createFertilizanteDto.nombreProducto,
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
    );

    this.productos.push(productoFertilizante);
    const FertilizanteCreado = this.servicioFertilizantes.create(
      createFertilizanteDto,
      idProducto,
      codigoProducto,
    );
    return FertilizanteCreado;
  }

  createSustrato(createSustrato: CreateSustratoDto) {
    const idProducto: number = this.obtCantidadProductos() + 1;
    const codigoProducto = this.servicioSustratos.createCodigo();
    const productoSustrato: Producto = new Producto(
      idProducto,
      createSustrato.nombreProducto,
      createSustrato.imagenProducto,
      createSustrato.descuento,
      createSustrato.precioNormal,
      createSustrato.coberturaDeDespacho,
      createSustrato.stock,
      createSustrato.descripcionProducto,
      TipoProductos.Sustratos,
      0,
      0,
      codigoProducto,
    );

    this.productos.push(productoSustrato);
    const sustratoCreado = this.servicioSustratos.create(
      createSustrato,
      idProducto,
      codigoProducto,
    );
    return sustratoCreado;
  }

  findOne(codigoProducto: string) {
    const tipoProducto = this.productos.find(
      (prod) => prod.codigoProducto == codigoProducto.toUpperCase().trim(),
    );
    if (!tipoProducto) {
      throw new ErrorPlantopia('No encontrado', 404);
    }
    const categoria = tipoProducto.categoria;
    const idProducto = tipoProducto.idProducto;
    if (categoria == TipoProductos.Macetero) {
      return this.servicioMaceteros.findOne(idProducto);
    } else if (categoria == TipoProductos.Planta) {
      return this.servicioPLantas.findOne(idProducto);
    } else if (categoria == TipoProductos.Fertilizantes) {
      return this.servicioFertilizantes.findOne(idProducto);
    } else if (categoria == TipoProductos.ControlPlagas) {
      return this.servicioControlPlagas.findOne(idProducto);
    } else if (categoria == TipoProductos.Sustratos) {
      return this.servicioSustratos.findOne(idProducto);
    }
  }

  bestSellers() {
    if (this.productos.length == 0) {
      throw new ErrorPlantopia('No encontrado', 404);
    }
    const total_productos = this.productos.length - 1;
    const total_ventas = this.productos
      .filter((a) => a.cantidadVentas > 0)
      .reduce((sum, a) => sum + a.cantidadVentas, 0);
    if (total_ventas == 0) {
      throw new ErrorPlantopia('No encontrado', 404);
    }
    const promedio = total_ventas / total_productos;
    const productosMasVentas = this.productos
      .filter((a) => a.cantidadVentas > promedio)
      .sort((a, b) => b.cantidadVentas - a.cantidadVentas);
    //  .slice(0, 3); /*solo devuelve  3*/
    return productosMasVentas;
  }
  findOneID(id: number) {
    const productoBuscado = this.productos.filter(
      (prod) => prod.idProducto == id,
    );
    if (!productoBuscado) {
      throw new ErrorPlantopia('Producto No encontrado', 404);
    }

    return productoBuscado;
  }
}
