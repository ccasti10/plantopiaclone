import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { CreateSustratoDto } from '../dto/create-sustrato.dto';
import { SustratosService } from '../service/sustratos.service';
@ApiTags('Sustratos')
@Controller('sustratos')
@UsePipes(new ValidationPipe({ transform: true }))
export class SustratosController {
  constructor(private readonly sustratosService: SustratosService) {}
  @ApiOperation({
    summary: 'Historia Usuario : H0003',
    description:
      'Permite crear sustratos para incorporar en catalogo de productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto tipo sustrato creado en catalogo de productos',
  })
  @ApiBody({ type: CreateSustratoDto })
  @Post()
  create(
    @Body(
      new ValidationPipe({
        transform: true,
      }),
    )
    createSustratoDto: CreateSustratoDto,
    @Res() res: Response,
  ) {
    res.status(200).send(createSustratoDto);
    //return this.sustratosService.create(createSustratoDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Historia Usuario : H0004',
    description:
      'Como cliente quiero poder ver el catalogo de productos filtrados por categoria =  Sustratos',
  })
  @ApiResponse({
    status: 200,
    description: 'Catalogo Sustratos',
  })
  findAll(@Res() res: Response) {
    res.status(200).send(this.sustratosService.findAll());
  }/*
  @Get('/MasVendidos/')
  @ApiOperation({
    summary: 'Historia Usuario : H0001 y H0002',
    description: 'Como cliente quiero ver los productos mas vendidos ',
  })
  @ApiResponse({
    status: 200,
    description: 'Listado Sustratos mas vendidos ',
  })
  listaMasVendidas(@Res() res: Response) {
    res.status(200).send(this.sustratosService.listaMasVendidas());
  }

   @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sustratosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSustratoDto: UpdateSustratoDto) {
    return this.sustratosService.update(+id, updateSustratoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sustratosService.remove(+id);
  }*/
}
