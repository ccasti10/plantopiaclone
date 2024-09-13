import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { VentasService } from '../service/ventas.service';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { UpdateVentaDto } from '../dto/update-venta.dto';

@ApiTags('ventas')
@Controller('ventas')
@UsePipes(new ValidationPipe({ transform: true }))
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las ventas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de ventas obtenida con éxito.',
  })
  findAll() {
    return this.ventasService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'id de la venta a obtener',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiOperation({ summary: 'Obtener una venta por ID' })
  @ApiResponse({ status: 200, description: 'Venta obtenida con éxito.' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    // Uso de ParseIntPipe para validar que el ID sea un número
    return this.ventasService.findOne(id);
  }

  @Post()
  @ApiBody({
    type: typeof CreateVentaDto,
  })
  @ApiOperation({ summary: 'Crear una nueva venta' })
  @ApiResponse({ status: 201, description: 'Venta creada con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createVentaDto: CreateVentaDto,
  ) {
    // Uso de ValidationPipe para validar el cuerpo de la petición con los DTOs
    return this.ventasService.create(createVentaDto);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    description: 'id de la venta a actualizar',
    required: true,
    schema: { type: 'UpdateVentaDto' },
  })
  @ApiBody({
    type: typeof UpdateVentaDto,
  })
  @ApiOperation({ summary: 'Actualizar una venta existente' })
  @ApiResponse({ status: 200, description: 'Venta actualizada con éxito.' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada.' })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateVentaDto: UpdateVentaDto,
  ) {
    // ParseIntPipe para validar el ID y ValidationPipe para validar el cuerpo de la petición
    return this.ventasService.update(id, updateVentaDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'description',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiOperation({ summary: 'Eliminar una venta' })
  @ApiResponse({ status: 200, description: 'Venta eliminada con éxito.' })
  @ApiResponse({ status: 404, description: 'Venta no encontrada.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.remove(id);
  }
}
