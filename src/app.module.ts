import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { DespachosModule } from './despachos/despachos.module';
import { ProductosModule } from './productos/productos.module';
import { VentasModule } from './ventas/ventas.module';
import { EquipoModule } from './equipo/equipo.module';
import { PlantasModule } from './plantas/plantas.module';
import { FertilizantesModule } from './fertilizantes/fertilizantes.module';
import { SustratosModule } from './sustratos/sustratos.module';
import { ControlPlagasModule } from './control-plagas/control-plagas.module';
import { OrdenComprasModule } from './orden-compras/orden-compras.module';
import { DetalleOrdenComprasModule } from './detalle-orden-compras/detalle-orden-compras.module';
import { MaceterosModule } from './maceteros/maceteros.module';
import { GlobalMiddlewareMiddleware } from './comunes/middleware/global.middleware.middleware';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuariosModule,
    ProductosModule,
    DespachosModule,
    VentasModule,
    EquipoModule,
    PlantasModule,
    FertilizantesModule,
    SustratosModule,
    ControlPlagasModule,
    OrdenComprasModule,
    DetalleOrdenComprasModule,
    MaceterosModule,
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: process.env.AMBIENTE === 'produccion' 
      ? '.env.productivo' 
      : '.env.develop',
    }),
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
 

export class AppModule  implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GlobalMiddlewareMiddleware) // MIDDLEWARE A APLICAR
     .forRoutes('*');                        // RUTAS A LAS QUE APLICA
    
  }
}
