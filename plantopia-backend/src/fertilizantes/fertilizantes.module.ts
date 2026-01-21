import { Module } from '@nestjs/common';
import { FertilizantesController } from './controller/fertilizantes.controller';
import { FertilizantesService } from './service/fertilizantes.service';


@Module({
  controllers: [FertilizantesController],
  providers: [FertilizantesService],
  exports: [FertilizantesService],
})
export class FertilizantesModule {}
