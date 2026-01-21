"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalFilter = void 0;
const common_1 = require("@nestjs/common");
const error_plantopia_1 = require("../error-plantopia/error-plantopia");
let GlobalFilter = class GlobalFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let status;
        let message;
        console.log('Filter HttpException Inicio');
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            const errorResponse = exception.getResponse();
            message = typeof errorResponse === 'string' ? errorResponse : errorResponse.message || 'Unknown error';
        }
        else if (exception instanceof error_plantopia_1.ErrorPlantopia) {
            status = exception.statusCode;
            message = exception.message;
        }
        else {
            status = common_1.HttpStatus.BAD_REQUEST;
            message = 'Ha ocurrido un error interno';
        }
        response.status(status).json({
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url,
        });
        console.log('Filter HttpException Global PLANTOPIA Status:' + status);
        console.log('Filter HttpException Global PLANTOPIA Mensaje del PIPE:' + message);
    }
};
exports.GlobalFilter = GlobalFilter;
exports.GlobalFilter = GlobalFilter = __decorate([
    (0, common_1.Catch)()
], GlobalFilter);
//# sourceMappingURL=global.filter.js.map