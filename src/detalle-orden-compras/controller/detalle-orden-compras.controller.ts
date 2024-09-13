import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DetalleOrdenComprasService } from '../service/detalle-orden-compras.service';
import { CreateDetalleOrdenCompraDto } from '../dto/create-detalle-orden-compra.dto';
import { UpdateDetalleOrdenCompraDto } from '../dto/update-detalle-orden-compra.dto';
 

@Controller('detalle-orden-compras')
export class DetalleOrdenComprasController {
  constructor(private readonly detalleOrdenComprasService: DetalleOrdenComprasService) {}

  @Post()
  create(@Body() createDetalleOrdenCompraDto: CreateDetalleOrdenCompraDto) {
    return this.detalleOrdenComprasService.create(createDetalleOrdenCompraDto);
  }

  @Get()
  findAll() {
    return this.detalleOrdenComprasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.detalleOrdenComprasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDetalleOrdenCompraDto: UpdateDetalleOrdenCompraDto) {
    return this.detalleOrdenComprasService.update(+id, updateDetalleOrdenCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.detalleOrdenComprasService.remove(+id);
  }
}
