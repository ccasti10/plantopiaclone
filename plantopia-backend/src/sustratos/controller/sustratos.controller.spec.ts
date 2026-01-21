import { Test, TestingModule } from '@nestjs/testing';
import { SustratosController } from './sustratos.controller';
import { SustratosService } from '../sustratos.service';

describe('SustratosController', () => {
  let controller: SustratosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SustratosController],
      providers: [SustratosService],
    }).compile();

    controller = module.get<SustratosController>(SustratosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
