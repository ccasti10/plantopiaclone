"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalMiddlewareMiddleware = void 0;
const common_1 = require("@nestjs/common");
let GlobalMiddlewareMiddleware = class GlobalMiddlewareMiddleware {
    use(req, res, next) {
        console.log('MIDDLEWARE - Path del Request:', req._parsedUrl.path);
        console.log('MIDDLEWARE - Metodo de Request: ', req.method);
        if (req.method === 'POST') {
            if (!req.body || Object.keys(req.body).length === 0) {
                return res.status(401).send({ message: 'MIDDLEWARE - No autorizado(Sin body Post)' });
            }
            else {
                console.log('MIDDLEWARE - Body de Request: ', req.body);
            }
        }
        if (req.method === 'GET') {
            if (req._parsedUrl.query != null) {
                console.log('MIDDLEWARE - Query Param: ' + req._parsedUrl.query);
            }
        }
        next();
    }
};
exports.GlobalMiddlewareMiddleware = GlobalMiddlewareMiddleware;
exports.GlobalMiddlewareMiddleware = GlobalMiddlewareMiddleware = __decorate([
    (0, common_1.Injectable)()
], GlobalMiddlewareMiddleware);
//# sourceMappingURL=global.middleware.middleware.js.map