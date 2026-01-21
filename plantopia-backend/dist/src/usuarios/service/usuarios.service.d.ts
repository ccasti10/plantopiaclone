import { Usuario } from '../entities/usuario.entity';
import { PlantasService } from 'src/plantas/service/plantas.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
export declare class UsuariosService {
    private readonly servicioPlantas;
    constructor(servicioPlantas: PlantasService);
    usuarios: Usuario[];
    create(createUsuarioDto: CreateUsuarioDto): Usuario;
    findAll(): Usuario[];
    findOne(id: number): Usuario;
    update(id: number, updateUsuarioDto: UpdateUsuarioDto): string;
    remove(id: number): string;
}
