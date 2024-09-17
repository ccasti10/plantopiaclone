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
import { ConfigService } from '@nestjs/config';
import * as packageJson from '../package.json';
import { url } from 'inspector';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const puerto = configService.get<number>('PUERTO');
  const ambiente = configService.get<string>('AMBIENTE');
  const version = configService.get<string>('VERSION');

  app.enableCors();
  // Configuración del interceptor para imprimir log de respuestas OK
  app.useGlobalInterceptors(new LogRespuestasInterceptor());

  // Configuración de Swagger para cada módulo
  // Configuración de Swagger para cada módulo
  const createSwaggerConfig = (moduleName: string) => {
    const title = `${packageJson.name} - ${moduleName} (${ambiente})`;
    const contacts = packageJson.contributors
      .map((contributor) => `${contributor.name} (${contributor.email})`)
      .join('\n');

    return new DocumentBuilder()
      .setTitle(title)
      .setDescription(
        `${packageJson.description}\n\n**Contactos:**\n${contacts}`,
      )
      .setVersion(packageJson.version)
      .setContact(packageJson.author, '', '')
      .setLicense(packageJson.license, '')
      .addServer('http://localhost:3000', 'Local')
      .build();
  };

  const document = SwaggerModule.createDocument(
    app,
    createSwaggerConfig('App'),
    {
      include: [AppModule],
    },
  );

  const productos = SwaggerModule.createDocument(
    app,
    createSwaggerConfig('Productos'),
    {
      include: [ProductosModule],
    },
  );

  const usuarioSwagger = SwaggerModule.createDocument(
    app,
    createSwaggerConfig('Usuarios'),
    {
      include: [UsuariosModule],
    },
  );

  const ocSwagger = SwaggerModule.createDocument(
    app,
    createSwaggerConfig('OrdenCompras'),
    {
      include: [OrdenComprasModule],
    },
  );

  const despachoSwagger = SwaggerModule.createDocument(
    app,
    createSwaggerConfig('Despachos'),
    {
      include: [DespachosModule],
    },
  );

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

  await app.listen(puerto);
  console.log(
    'Aplicación escuchando en http://localhost:' +
      puerto +
      ' ,en ambiente de ' +
      ambiente +
      ' con version: ' +
      version,
  );
}
bootstrap();
