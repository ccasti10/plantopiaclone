import { Module } from '@nestjs/common';
import { DespachosController } from './controller/despachos.controller';
import { DespachosService } from './service/despachos.service';
 

@Module({
  controllers: [DespachosController],
  providers: [DespachosService],
})
export class DespachosModule {}
