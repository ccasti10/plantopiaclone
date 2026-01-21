import { Module } from '@nestjs/common';
import { ControlPlagasController } from './contoller/control-plagas.controller';
import { ControlPlagasService } from './service/control-plagas.service';


@Module({
  controllers: [ControlPlagasController],
  providers: [ControlPlagasService],
  exports: [ControlPlagasService],
})
export class ControlPlagasModule {}
