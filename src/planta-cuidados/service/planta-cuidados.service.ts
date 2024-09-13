import { Injectable } from '@nestjs/common';
import { CreatePlantaCuidadoDto } from '../dto/create-planta-cuidado.dto';
import { UpdatePlantaCuidadoDto } from '../dto/update-planta-cuidado.dto';
 

@Injectable()
export class PlantaCuidadosService {
  create(createPlantaCuidadoDto: CreatePlantaCuidadoDto) {
    return 'This action adds a new plantaCuidado';
  }

  findAll() {
    return `This action returns all plantaCuidados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plantaCuidado`;
  }

  update(id: number, updatePlantaCuidadoDto: UpdatePlantaCuidadoDto) {
    return `This action updates a #${id} plantaCuidado`;
  }

  remove(id: number) {
    return `This action removes a #${id} plantaCuidado`;
  }
}
