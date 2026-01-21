import { PipeTransform } from '@nestjs/common';
export declare class CodigoProductoPipe implements PipeTransform<string> {
    transform(value: string): string;
}
