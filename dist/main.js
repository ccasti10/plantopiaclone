"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const productos_module_1 = require("./productos/productos.module");
const despachos_module_1 = require("./despachos/despachos.module");
const plantas_module_1 = require("./plantas/plantas.module");
const fertilizantes_module_1 = require("./fertilizantes/fertilizantes.module");
const sustratos_module_1 = require("./sustratos/sustratos.module");
const control_plagas_module_1 = require("./control-plagas/control-plagas.module");
const orden_compras_module_1 = require("./orden-compras/orden-compras.module");
const common_1 = require("@nestjs/common");
const log_respuestas_interceptor_1 = require("./log-respuestas/log-respuestas.interceptor");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalInterceptors(new log_respuestas_interceptor_1.LogRespuestasInterceptor());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('API Plantopia APP')
        .setDescription('Esta es la documentación de la API de la APP Plantopia')
        .setVersion('1.0')
        .addTag('app-plantopia')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [app_module_1.AppModule],
    });
    const productos = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [productos_module_1.ProductosModule],
    });
    const plantasSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [plantas_module_1.PlantasModule],
    });
    const fertilizantesSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [fertilizantes_module_1.FertilizantesModule],
    });
    const sustratosSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [sustratos_module_1.SustratosModule],
    });
    const controlPlagasSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [control_plagas_module_1.ControlPlagasModule],
    });
    const usuarioSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [usuarios_module_1.UsuariosModule],
    });
    const ocSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [orden_compras_module_1.OrdenComprasModule],
    });
    const despachoSwagger = swagger_1.SwaggerModule.createDocument(app, config, {
        include: [despachos_module_1.DespachosModule],
    });
    swagger_1.SwaggerModule.setup('api/productos', app, productos, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/plantas', app, plantasSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/fertilizantes', app, fertilizantesSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/sustratos', app, sustratosSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/controlPlagas', app, controlPlagasSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/despachos', app, despachoSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api', app, document, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/usuarios', app, usuarioSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    swagger_1.SwaggerModule.setup('api/ordenCompra', app, ocSwagger, {
        yamlDocumentUrl: 'swagger/yaml',
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map