import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ValidationPipe } from '@nestjs/common';
 
 

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { FertilizantesService } from '../service/fertilizantes.service';
@ApiTags('Fertilizantes')
@Controller('fertilizantes')
export class FertilizantesController {
  constructor(private readonly fertilizantesService: FertilizantesService) {}
   /*
  @ApiOperation({
    summary: 'Historia Usuario : H0003',
    description: 'Permite crear fertilizantes para incorporar en catálogo de productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto tipo fertilizante creado en catálogo de productos',
 
  })
  @Post()
  create(@Body(new ValidationPipe()) createFertilizanteDto: CreateFertilizanteDto,@Res() res:Response) {
     res.status(200).send(createFertilizanteDto);
  //  return this.fertilizantesService.create(createFertilizanteDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Historia Usuario : H0004',
    description: 'Como cliente quiero poder ver el catálogo de productos filtrados por categoria =  Fertilizantes',
  })
  @ApiResponse({
    status: 200,
    description: 'Catálogo Fertilizantes',
 
  })
  findAll(@Res() res:Response) {
    res.status(200).send(this.fertilizantesService.findAll())
  }
 
  @Get('/MasVendidos/')
  @ApiOperation({
    summary: 'Historia Usuario : H0001 y H0002',
    description: 'Como cliente quiero ver los productos más vendidos ',
  })
  @ApiResponse({
    status: 200,
    description: 'Listado Fertilizantes más vendidos ',
 
  })
  
  listaMasVendidas(@Res() res:Response) {
    res.status(200).send( this.fertilizantesService.listaMasVendidas()) ;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fertilizantesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFertilizanteDto: UpdateFertilizanteDto) {
    return this.fertilizantesService.update(+id, updateFertilizanteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fertilizantesService.remove(+id);
  }*/
}
