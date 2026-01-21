import { Module } from '@nestjs/common';
import { EquipoService } from './service/equipo.service';
import { EquipoController } from './controller/equipo.controller';
 

@Module({
  providers: [EquipoService],
  controllers: [EquipoController]
})
export class EquipoModule {}
