import { Module } from '@nestjs/common';

import { MaceterosModule } from 'src/maceteros/maceteros.module';
import { PlantasModule } from 'src/plantas/plantas.module';
import { ProductosController } from './controller/productos.controller';
import { ProductosService } from './service/productos.service';
import { ControlPlagasModule } from 'src/control-plagas/control-plagas.module';
import { FertilizantesModule } from 'src/fertilizantes/fertilizantes.module';
import { SustratosModule } from 'src/sustratos/sustratos.module';

@Module({
  controllers: [ProductosController],
  providers: [ProductosService],
  imports: [
    MaceterosModule,
    PlantasModule,
    ControlPlagasModule,
    FertilizantesModule,
    SustratosModule,
  ],
  exports: [ProductosService],
})
export class ProductosModule { }
