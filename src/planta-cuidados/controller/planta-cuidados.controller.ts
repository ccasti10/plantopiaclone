import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlantaCuidadosService } from '../service/planta-cuidados.service';
import { CreatePlantaCuidadoDto } from '../dto/create-planta-cuidado.dto';
import { UpdatePlantaCuidadoDto } from '../dto/update-planta-cuidado.dto';
 

@Controller('planta-cuidados')
export class PlantaCuidadosController {
  constructor(private readonly plantaCuidadosService: PlantaCuidadosService) {}

  @Post()
  create(@Body() createPlantaCuidadoDto: CreatePlantaCuidadoDto) {
    return this.plantaCuidadosService.create(createPlantaCuidadoDto);
  }

  @Get()
  findAll() {
    return this.plantaCuidadosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.plantaCuidadosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlantaCuidadoDto: UpdatePlantaCuidadoDto) {
    return this.plantaCuidadosService.update(+id, updatePlantaCuidadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.plantaCuidadosService.remove(+id);
  }
}
