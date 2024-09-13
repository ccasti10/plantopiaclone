import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ValidationPipe } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
@ApiTags('Control de Plagas')
@Controller('control-plagas')
export class ControlPlagasController {
  /*constructor(private readonly controlPlagasService: ControlPlagasService) {}

  @ApiOperation({
    summary: 'Historia Usuario : H0003',
    description: 'Permite crear control de plagas para incorporar en catálogo de productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto tipo control plagas creado en catálogo de productos',
 
  })
  @Post()
  create(@Body(new ValidationPipe()) createControlPlagasDto: CreateControlPlagasDto,@Res() res:Response) {
    res.status(200).send(createControlPlagasDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Historia Usuario : H0004',
    description: 'Como cliente quiero poder ver el catálogo de productos filtrados por categoria =  Control Plagas',
  })
  @ApiResponse({
    status: 200,
    description: 'Catálago Control Plagas',
 
  })
  findAll(@Res() res:Response) {
    res.status(200).send(this.controlPlagasService.findAll())
  }
    /*
  @Get('/MasVendidos/')
  @ApiOperation({
    summary: 'Historia Usuario : H0001 y H0002',
    description: 'Como cliente quiero ver los productos más vendidos ',
  })
  @ApiResponse({
    status: 200,
    description: 'Listado Control de Plagas más vendidos ',
 
  })
  listaMasVendidas(@Res() res:Response) {
    res.status(200).send( this.controlPlagasService.listaMasVendidas()) ;
  }


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.controlPlagasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateControlPlagasDto: UpdateControlPlagasDto) {
    return this.controlPlagasService.update(+id, updateControlPlagasDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controlPlagasService.remove(+id);
  }*/
}
