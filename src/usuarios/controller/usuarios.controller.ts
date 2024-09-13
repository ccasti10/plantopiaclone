import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { UsuariosService } from '../service/usuarios.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';

@ApiTags('usuarios')
@Controller('usuarios')
@UsePipes(new ValidationPipe({ transform: true }))
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({
    status: 200,
    description: 'Lista de usuarios obtenida con éxito.',
  })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'id del usuario a obtener',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario obtenido con éxito.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    // Validar que el ID sea un número con ParseIntPipe
    return this.usuariosService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiResponse({ status: 201, description: 'Usuario creado con éxito.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos.' })
  @ApiBody({ type: CreateUsuarioDto })
  create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUserDto: CreateUsuarioDto,
  ) {
    // Validar el cuerpo de la petición con ValidationPipe y el DTO de creación
    return this.usuariosService.create(createUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un usuario existente' })
  @ApiResponse({ status: 200, description: 'Usuario actualizado con éxito.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  @ApiBody({ type: UpdateUsuarioDto })
  @ApiParam({
    name: 'id',
    description: 'id del usuario a actualizar',
    required: true,
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateUserDto: UpdateUsuarioDto,
  ) {
    // Validar que el ID sea un número y validar el cuerpo de la petición con ValidationPipe
    return this.usuariosService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    description: 'id del usuario a eliminar',
    required: true,
    schema: { type: 'integer' },
  })
  @ApiOperation({ summary: 'Eliminar un usuario' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  remove(@Param('id', ParseIntPipe) id: number) {
    // Validar que el ID sea un número
    return this.usuariosService.remove(id);
  }
}
