import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ErrorPlantopia } from 'src/comunes/error-plantopia/error-plantopia';

@Injectable()
export class CodigoProductoPipe implements PipeTransform<string> {
  transform(value: string):string {
    const letrasNumeros = /^[a-zA-Z0-9]+$/;
    if (!letrasNumeros.test(value)) {
      //throw new BadRequestException('El código solo puede contener letras y números.');
      throw new ErrorPlantopia('valores no validos', 404);
    }

    return value;
    
  }
}
 