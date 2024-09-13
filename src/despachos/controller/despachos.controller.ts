import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from '@nestjs/common';
 
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
import { DespachosService } from '../service/despachos.service';

@ApiTags('Despachos')
@Controller('despachos')
export class DespachosController {
  constructor(private readonly despachosService: DespachosService) {}
/*
  @Get()
  @ApiOperation({ summary: 'Obtener todos los despachos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de despachos obtenida con éxito.',
  })
  findAll() {
    // lógica para obtener todos los despachos
    this.despachosService.findAll();
  }
*/
  @Get(':id/seguimiento')
  @ApiOperation({
    summary: 'Historia Usuario : H0006',
    description: 'Como cliente quiero hacer seguimiento a mi compra',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna Despacho',
 
  })
 
  findOne(@Param('id') id: string, @Res() res:Response) {
    // lógica para obtener un despacho por ID
    //this.despachosService.findOne(+id);
    const idBusqueda:number=1;
    const resultado=this.despachosService.findOne(idBusqueda);
    res.status(200).send(resultado );
  }
/*
  @Post()
  @ApiOperation({ summary: 'Crear un nuevo despacho' })
  @ApiResponse({ status: 201, description: 'Despacho creado con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createDespachoDto: any) {
    // lógica para crear un nuevo despacho
    this.despachosService.create(createDespachoDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un despacho existente' })
  @ApiResponse({ status: 200, description: 'Despacho actualizado con éxito.' })
  @ApiResponse({ status: 404, description: 'Despacho no encontrado.' })
  update(@Param('id') id: string, @Body() updateDespachoDto: any) {
    // lógica para actualizar un despacho existente
    this.despachosService.update(+id, updateDespachoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un despacho' })
  @ApiResponse({ status: 200, description: 'Despacho eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Despacho no encontrado.' })
  remove(@Param('id') id: string) {
    // lógica para eliminar un despacho
    this.despachosService.remove(+id);
  }*/
}
