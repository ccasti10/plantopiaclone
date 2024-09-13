import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MaceterosService } from '../service/maceteros.service';
import { UpdateMaceteroDto } from '../dto/update-macetero.dto';
@ApiTags('maceteros')

@Controller('maceteros')
export class MaceterosController {
  constructor(private readonly maceterosService: MaceterosService) {}

  /*@Post()
  @ApiOperation({
    summary: 'Historia Usuario : H0003',
    description: 'Permite crear maceteros para incorporar en catalogo de productos',
  })
  @ApiResponse({
    status: 200,
    description: 'Producto tipo maceteros creado en catalogo de productos',
 
  })
  create(@Body() createMaceteroDto: CreateMaceteroDto) {
    return this.maceterosService.create(createMaceteroDto);
  }*/

  @Get()
  findAll() {
    return this.maceterosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maceterosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaceteroDto: UpdateMaceteroDto) {
    return this.maceterosService.update(+id, updateMaceteroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maceterosService.remove(+id);
  }
}
