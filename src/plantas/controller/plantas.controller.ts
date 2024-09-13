import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  ValidationPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PlantasService } from '../service/plantas.service';

@ApiTags('plantas')
@Controller('plantas')
export class PlantasController {
  constructor(private readonly plantasService: PlantasService) {}
}
