import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { VentasModule } from './ventas/ventas.module';
import { ProductosModule } from './productos/productos.module';
import { DespachosModule } from './despachos/despachos.module';
import { EquipoModule } from './equipo/equipo.module';
import { PlantasModule } from './plantas/plantas.module';
import { FertilizantesModule } from './fertilizantes/fertilizantes.module';
import { SustratosModule } from './sustratos/sustratos.module';
import { ControlPlagasModule } from './control-plagas/control-plagas.module';
import { OrdenComprasModule } from './orden-compras/orden-compras.module';
import { ValidationPipe } from '@nestjs/common';
import { MaceterosModule } from './maceteros/maceteros.module';
import { LogRespuestasInterceptor } from './comunes/interceptor/log-respuestas/log-respuestas.interceptor';
import { GlobalFilter } from './comunes/filter/global.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Configuración del interceptor para imprimir log de respuestas OK
  app.useGlobalInterceptors(new LogRespuestasInterceptor());
    // Configuración de Swagger para la aplicación principal
  const config = new DocumentBuilder()
    .setTitle('API Plantopia APP')
    .setDescription('Esta es la documentación de la API de la APP Plantopia')
    .setVersion('1.0')
    .addTag('app-plantopia')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [AppModule],
  });

  const productos = SwaggerModule.createDocument(app, config, {
    include: [ProductosModule],
  });
      //documentacion plantas

  
  //documentacion usuario
  const usuarioSwagger = SwaggerModule.createDocument(app, config, {
    include: [UsuariosModule],
  });
  //documentacion OC
  const ocSwagger = SwaggerModule.createDocument(app, config, {
    include: [OrdenComprasModule],
  });
  //documentacion OC
  const despachoSwagger = SwaggerModule.createDocument(app, config, {
    include: [DespachosModule],
  });

  SwaggerModule.setup('api/productos', app, productos, {
    yamlDocumentUrl: 'swagger/yaml',
  });
   
  SwaggerModule.setup('api/despachos', app, despachoSwagger, {
    yamlDocumentUrl: 'swagger/yaml',
  });

  SwaggerModule.setup('api', app, document, {
    yamlDocumentUrl: 'swagger/yaml',
  });
  SwaggerModule.setup('api/usuarios', app, usuarioSwagger, {
    yamlDocumentUrl: 'swagger/yaml',
  });
  SwaggerModule.setup('api/ordenCompra', app, ocSwagger, {
    yamlDocumentUrl: 'swagger/yaml',
  });

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new GlobalFilter());
  
  await app.listen(3000);
}
bootstrap();
