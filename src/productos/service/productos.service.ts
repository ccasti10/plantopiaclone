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
      new Producto(
        1,
        'macetero rojo',
        ['http://lugar.com/imagen_m1.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero de alta gama',
        TipoProductos.Macetero,
        0,
        0,
        'MA1',
      ),
      new Producto(
        2,
        'macetero blanco',
        ['http://lugar.com/imagen_m2.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero interior',
        TipoProductos.Macetero,
        0,
        500,
        'MA2',
      ),
      new Producto(
        3,
        'macetero verde',
        ['http://lugar.com/imagen_m1.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero de alta gama',
        TipoProductos.Macetero,
        0,
        500,
        'MA3',
      ),
      new Producto(
        4,
        'macetero azul',
        ['http://lugar.com/imagen_m2.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero interior',
        TipoProductos.Macetero,
        0,
        0,
        'MA4',
      ),
      new Producto(
        5,
        'macetero amarillo',
        ['http://lugar.com/imagen_m1.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero de alta gama',
        TipoProductos.Macetero,
        0,
        500,
        'MA5',
      ),
      new Producto(
        6,
        'macetero celeste',
        ['http://lugar.com/imagen_m2.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero interior',
        TipoProductos.Macetero,
        0,
        250,
        'MA6',
      ),
      new Producto(
        7,
        'macetero rosa',
        ['http://lugar.com/imagen_m1.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero de alta gama',
        TipoProductos.Macetero,
        0,
        320,
        'MA7',
      ),
      new Producto(
        8,
        'macetero plomo',
        ['http://lugar.com/imagen_m2.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'macetero interior',
        TipoProductos.Macetero,
        0,
        0,
        'MA8',
      ),
      new Producto(
        9,
        'Planta de Interior Verde',
        ['http://lugar.com/imagen_p1.png'],
        5,
        3000,
        ['Arica a Pta.Arenas'],
        20,
        'Planta ideal para interiores con poca luz.',
        TipoProductos.Planta,
        4,
        150,
        'PL17',
      ),
      new Producto(
        10,
        'Sombra de Jardín',
        ['http://lugar.com/imagen_p2.png'],
        10,
        1500,
        ['Arica a Pta.Arenas'],
        30,
        'Perfecta para dar sombra en jardines grandes.',
        TipoProductos.Planta,
        5,
        200,
        'PL18',
      ),
      new Producto(
        11,
        'Cactus Decorativo',
        ['http://lugar.com/imagen_p3.png'],
        0,
        500,
        ['Arica a Pta.Arenas'],
        15,
        'Cactus pequeño ideal para decoración de interiores.',
        TipoProductos.Planta,
        3,
        1000,
        'PL19',
      ),
      new Producto(
        12,
        'fetilizante prueba 1',
        ['http://lugar.com/imagen_f1.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'no tiene',
        TipoProductos.Fertilizantes,
        0,
        500,
        'FE1',
      ),
      new Producto(
        13,
        'fetilizante prueba 2',
        ['http://lugar.com/imagen_f2.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'tampoco tiene',
        TipoProductos.Fertilizantes,
        0,
        500,
        'FE2',
      ),
      new Producto(
        14,
        'control plaga prueba 1',
        ['http://lugar.com/imagen_cp1.png'],
        0,
        2500,
        ['Arica a Pta.Arenas'],
        10,
        'no tiene',
        TipoProductos.ControlPlagas,
        0,
        2500,
        'CP1',
      ),
      new Producto(
        15,
        'control plaga prueba2',
        ['http://lugar.com/imagen_cp2.png'],
        0,
        1500,
        ['Arica a Pta.Arenas'],
        10,
        'tampoco tiene',
        TipoProductos.ControlPlagas,
        0,
        2510,
        'CP2',
      ),
      new Producto(
        16,
        'Mezcla para plantas de interior con perlita',
        ['http://lugar.com/imagen_s1.png'],
        0,
        25000,
        ['Arica a Pta.Arenas'],
        1500,
        'Ideal para plantas de interior que necesitan drenaje',
        TipoProductos.Sustratos,
        0,
        481,
        'SU1',
      ),
      new Producto(
        17,
        'Sustrato con turba y perlita',
        ['http://lugar.com/imagen_s2.png'],
        0,
        25000,
        ['Arica a Pta.Arenas'],
        1500,
        'Ideal para plantas de interior que necesitan drenaje',
        TipoProductos.Sustratos,
        0,
        481,
        'SU2',
      ),
      new Producto(
        18,
        'Sustrato con turba y perlita',
        ['http://lugar.com/imagen_s3.png'],
        0,
        25000,
        ['Arica a Pta.Arenas'],
        1500,
        'Ideal para plantas de interior que necesitan drenaje',
        TipoProductos.Sustratos,
        0,
        481,
        'SU2',
      ),
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
