"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const productos_module_1 = require("./productos/productos.module");
const despachos_module_1 = require("./despachos/despachos.module");
const orden_compras_module_1 = require("./orden-compras/orden-compras.module");
const common_1 = require("@nestjs/common");
const log_respuestas_interceptor_1 = require("./comunes/interceptor/log-respuestas/log-respuestas.interceptor");
const global_filter_1 = require("./comunes/filter/global.filter");
const config_1 = require("@nestjs/config");
const packageJson = __importStar(require("../package.json"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const puerto = configService.get('PUERTO');
    const ambiente = configService.get('AMBIENTE');
    const version = configService.get('VERSION');
    app.enableCors();
    app.useGlobalInterceptors(new log_respuestas_interceptor_1.LogRespuestasInterceptor());
    const createSwaggerConfig = (moduleName) => {
        const title = `${packageJson.name} - ${moduleName} (${ambiente})`;
        const contacts = packageJson.contributors
            .map((contributor) => `${contributor.name} (${contributor.email})`)
            .join('\n');
        return new swagger_1.DocumentBuilder()
            .setTitle(title)
            .setDescription(`${packageJson.description}\n\n**Contactos:**\n${contacts}`)
            .setVersion(packageJson.version)
            .setContact(packageJson.author, '', '')
            .setLicense(packageJson.license, '')
            .addServer('http://localhost:3000', 'Local')
            .build();
    };
    const document = swagger_1.SwaggerModule.createDocument(app, createSwaggerConfig('App'), {
        include: [app_module_1.AppModule],
    });
    const productos = swagger_1.SwaggerModule.createDocument(app, createSwaggerConfig('Productos'), {
        include: [productos_module_1.ProductosModule],
    });
    const usuarioSwagger = swagger_1.SwaggerModule.createDocument(app, createSwaggerConfig('Usuarios'), {
        include: [usuarios_module_1.UsuariosModule],
    });
    const ocSwagger = swagger_1.SwaggerModule.createDocument(app, createSwaggerConfig('OrdenCompras'), {
        include: [orden_compras_module_1.OrdenComprasModule],
    });
    const despachoSwagger = swagger_1.SwaggerModule.createDocument(app, createSwaggerConfig('Despachos'), {
        include: [despachos_module_1.DespachosModule],
    });
    swagger_1.SwaggerModule.setup('api/productos', app, productos, {
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
    app.useGlobalFilters(new global_filter_1.GlobalFilter());
    await app.listen(puerto);
    console.log('Aplicación escuchando en http://localhost:' +
        puerto +
        ' ,en ambiente de ' +
        ambiente +
        ' con version: ' +
        version);
}
bootstrap();
//# sourceMappingURL=main.js.map