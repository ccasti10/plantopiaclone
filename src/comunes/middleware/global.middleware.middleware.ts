import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GlobalMiddlewareMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('MIDDLEWARE - Path del Request:', req._parsedUrl.path);
    console.log('MIDDLEWARE - Metodo de Request: ', req.method);
    if (req.method === 'POST') {
      if (!req.body || Object.keys(req.body).length === 0) {
        return res.status(401).send({ message: 'MIDDLEWARE - No autorizado(Sin body Post)' });
      } else {
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
}

/*
Crear un middleware y aplicarlo para todos los endpoints. Este
middleware debe imprimir en consola los siguientes datos: path,
method (GET, POST, etc) y body (si aplica).
  
*/
