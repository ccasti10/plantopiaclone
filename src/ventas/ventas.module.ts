import { Module } from '@nestjs/common';
import { VentasController } from './controller/ventas.controller';
import { VentasService } from './service/ventas.service';

@Module({
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
