import { Module } from '@nestjs/common';
import { DetalleOrdenComprasController } from './controller/detalle-orden-compras.controller';
import { DetalleOrdenComprasService } from './service/detalle-orden-compras.service';
 

@Module({
  controllers: [DetalleOrdenComprasController],
  providers: [DetalleOrdenComprasService],
  exports:[DetalleOrdenComprasService]
})
export class DetalleOrdenComprasModule {}
