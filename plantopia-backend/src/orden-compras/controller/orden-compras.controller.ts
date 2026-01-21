import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ValidationPipe, UsePipes } from '@nestjs/common';

import { CreateOrdenCompraDto } from '../dto/create-orden-compra.dto';
import { UpdateOrdenCompraDto } from '../dto/update-orden-compra.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { OrdenComprasService } from '../service/orden-compras.service';
import { ValidaOrdenPipePipe } from 'src/comunes/pipes/valida-orden.pipe.pipe';
@ApiTags('Orden de Compra')
@Controller('ordencompra')
export class OrdenComprasController {
  constructor(private readonly ordenComprasService: OrdenComprasService) {}


  @UsePipes(new ValidationPipe())
  @ApiOperation({
    summary: 'Historia Usuario : H0005',
    description: 'Permite crear orden de compra con productos seleccionado',
  })
  @ApiResponse({
    status: 200,
    description: 'Orden de Compra Creada desde carrito compras',
 
  })
  @ApiResponse({ status: 200, description: 'Orden Creada y devuelve id Orden' })
  @ApiResponse({ status: 400, description: 'Orden no Creada' })
  @ApiBody({ type: CreateOrdenCompraDto })
  
  @Post()
  @UsePipes(ValidaOrdenPipePipe)
  create(@Body() CreateOrdenCompraDto: CreateOrdenCompraDto, @Res() res:Response) {
    // const resultado = this.ordenComprasService.create(CreateOrdenCompraDto);
    //res.status(200).send(resultado);
    try{
        const resultado = this.ordenComprasService.create(CreateOrdenCompraDto);
        res.status(200).send(resultado);
    }catch(error){
      res.status(error.statusCode).send({message: error.message});
    } 
  }
 
  @Get()
  findAll() {
    return this.ordenComprasService.findAll();
  }
/*
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ordenComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrdenCompraDto: UpdateOrdenCompraDto) {
    return this.ordenComprasService.update(+id, updateOrdenCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenComprasService.remove(+id);
  }*/
}
