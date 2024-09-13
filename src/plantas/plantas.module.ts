import { Module } from '@nestjs/common';
import { PlantasController } from './controller/plantas.controller';
import { PlantasService } from './service/plantas.service';
 

@Module({
  controllers: [PlantasController],
  providers: [PlantasService],
  exports:[PlantasService]
})
export class PlantasModule {}
