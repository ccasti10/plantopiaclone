import { Module } from '@nestjs/common';
import { MaceterosService } from './service/maceteros.service';
import { MaceterosController } from './controller/maceteros.controller';

@Module({
  controllers: [MaceterosController],
  providers: [MaceterosService],
  exports: [MaceterosService],
})
export class MaceterosModule {}
