import { Module } from '@nestjs/common';
import { PlantaCuidadosController } from './controller/planta-cuidados.controller';
import { PlantaCuidadosService } from './service/planta-cuidados.service';
@Module({
  controllers: [PlantaCuidadosController],
  providers: [PlantaCuidadosService],
})
export class PlantaCuidadosModule {}
