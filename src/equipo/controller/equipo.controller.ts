import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
 
 
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { EquipoService } from '../service/equipo.service';
import { Equipo } from '../entities/equipo.entity';

@ApiTags('equipos')
@Controller('equipos')
export class EquipoController {
  constructor(private readonly equipoService: EquipoService) {}

  @Get('/informacion')
  getEquipo() {
    return this.equipoService.getEquipo();
  }

  @Get('informacion/areas')
  getAreas(@Query('nombreArea') nombreArea?: string): Equipo[] {
    return this.equipoService.getAreas(nombreArea ? nombreArea : undefined);
  }

  @Get('informacion/ecommerce')
  getEcommerce(): object {
    console.log('ecommerce');
    return this.equipoService.getEcommerce();
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los equipos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de equipos obtenida con éxito.',
  })
  findAll() {
    // lógica para obtener todos los equipos
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un equipo por ID' })
  @ApiResponse({ status: 200, description: 'Equipo obtenido con éxito.' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado.' })
  findOne(@Param('id') id: string) {
    // lógica para obtener un equipo por ID
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo equipo' })
  @ApiResponse({ status: 201, description: 'Equipo creado con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  create(@Body() createEquipoDto: any) {
    // lógica para crear un nuevo equipo
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un equipo existente' })
  @ApiResponse({ status: 200, description: 'Equipo actualizado con éxito.' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado.' })
  update(@Param('id') id: string, @Body() updateEquipoDto: any) {
    // lógica para actualizar un equipo existente
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un equipo' })
  @ApiResponse({ status: 200, description: 'Equipo eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Equipo no encontrado.' })
  remove(@Param('id') id: string) {
    // lógica para eliminar un equipo
  }
}
