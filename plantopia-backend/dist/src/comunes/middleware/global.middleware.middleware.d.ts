import { NestMiddleware } from '@nestjs/common';
export declare class GlobalMiddlewareMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): any;
}
