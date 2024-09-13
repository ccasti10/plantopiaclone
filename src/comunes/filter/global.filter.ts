import { ArgumentsHost, BadRequestException, Catch, ExceptionFilter, HttpException, HttpStatus, ImATeapotException } from '@nestjs/common';
import { Response } from 'express';
import { ErrorPlantopia } from '../error-plantopia/error-plantopia';
@Catch()
export class GlobalFilter<ImATeapotException> implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Variables para manejar el código de estado y mensaje
    let status: number;
    let message: string;
    console.log('Filter HttpException Inicio');
    // Si la excepción es una instancia de HttpException (manejo de excepciones NestJS)
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const errorResponse = exception.getResponse();
      message = typeof errorResponse === 'string' ? errorResponse : (errorResponse as any).message || 'Unknown error';
    }
    // Si la excepción es una instancia de ErrorPlantopia (excepción personalizada)
    else if (exception instanceof ErrorPlantopia) {
      status = exception.statusCode; // Usamos el statusCode de ErrorPlantopia
      message = exception.message;
    }
    // Si es una excepción genérica o no controlada
    else {
      status = HttpStatus.BAD_REQUEST;  // Usar 400 por defecto en lugar de 500
      message = 'Ha ocurrido un error interno';
    }

    // Enviar la respuesta con el código de estado adecuado
    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  
    console.log('Filter HttpException Global PLANTOPIA Status:' + status);
    console.log('Filter HttpException Global PLANTOPIA Mensaje del PIPE:' + message);
  }

}
