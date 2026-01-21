"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRespuestasInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let LogRespuestasInterceptor = class LogRespuestasInterceptor {
    intercept(context, next) {
        const response = context.switchToHttp().getResponse();
        const request = context.switchToHttp().getRequest();
        const method = request.method;
        return next.handle().pipe((0, operators_1.tap)({
            next: (data) => {
                const statusCode = response.statusCode;
                if (statusCode >= 200 && statusCode < 300) {
                    console.log(`✅ Respuesta exitosa [${statusCode}] Interceptor ➡️ 🚀 :`, {
                        requestUrl: request.url,
                        requestMethod: method,
                        responseData: data,
                    });
                }
            },
        }), (0, operators_1.catchError)((err) => {
            const statusCode = err.status || err.statusCode || 500;
            const errorResponse = {
                statusCode,
                message: err.message || 'Internal Server Error',
                error: err.response || 'Unknown Error',
            };
            return (0, rxjs_1.throwError)(() => err);
        }));
    }
};
exports.LogRespuestasInterceptor = LogRespuestasInterceptor;
exports.LogRespuestasInterceptor = LogRespuestasInterceptor = __decorate([
    (0, common_1.Injectable)()
], LogRespuestasInterceptor);
//# sourceMappingURL=log-respuestas.interceptor.js.map