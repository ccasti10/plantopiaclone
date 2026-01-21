import { Injectable } from '@nestjs/common';
import { VerDespachos } from '../dto/ver-despachos-dto';
import { EstadosDespacho } from '../entities/enum-despachos';
 

@Injectable()
export class DespachosService {

  seguimiento: VerDespachos[] =[];
    constructor()
  {
    let sigueCompra: VerDespachos = new VerDespachos();
     sigueCompra.EstadosDespacho = EstadosDespacho.EN_CAMINO;
     sigueCompra.fechaEstimada =  new Date('2024/08/31');
     sigueCompra.nroSeguimiento =152525;
     sigueCompra.proveedorDespacho = 'Blue-Express';
     this.seguimiento.push(sigueCompra)
    
  }/*
  create(createDespachoDto: CreateDespachoDto) {
    return 'This action adds a new despacho';
  }

  findAll() {
    return `Modulo Despacho - Epica Compra(Seguimiento)`;
  }*/

  findOne(id: number) {
    return this.seguimiento;
  }
/*
  update(id: number, updateDespachoDto: UpdateDespachoDto) {
    return `This action updates a #${id} despacho`;
  }

  remove(id: number) {
    return `This action removes a #${id} despacho`;
  }*/
}
