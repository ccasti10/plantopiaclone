import { UsuariosService } from '../service/usuarios.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): string;
    findOne(id: number): string;
    create(createUserDto: CreateUsuarioDto): string;
    update(id: number, updateUserDto: UpdateUsuarioDto): string;
    remove(id: number): string;
}
