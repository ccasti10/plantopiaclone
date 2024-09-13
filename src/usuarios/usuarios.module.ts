import { Module } from '@nestjs/common';
import { PlantasModule } from 'src/plantas/plantas.module';
import { UsuariosController } from './controller/usuarios.controller';
import { UsuariosService } from './service/usuarios.service';

@Module({
  imports: [PlantasModule],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
