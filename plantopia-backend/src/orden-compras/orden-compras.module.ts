import { Module } from '@nestjs/common';
 
import { OrdenComprasController } from './controller/orden-compras.controller';
import { OrdenComprasService } from './service/orden-compras.service';
import { DetalleOrdenComprasModule } from 'src/detalle-orden-compras/detalle-orden-compras.module';
import { ProductosModule } from 'src/productos/productos.module';

@Module({
  controllers: [OrdenComprasController],
  providers: [OrdenComprasService],
  imports:[DetalleOrdenComprasModule,ProductosModule]
})
export class OrdenComprasModule {}
