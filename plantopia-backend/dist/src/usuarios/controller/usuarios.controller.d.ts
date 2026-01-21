import { UsuariosService } from '../service/usuarios.service';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): import("../entities/usuario.entity").Usuario[];
    findOne(id: number): import("../entities/usuario.entity").Usuario;
    create(createUserDto: CreateUsuarioDto): import("../entities/usuario.entity").Usuario;
    update(id: number, updateUserDto: UpdateUsuarioDto): string;
    remove(id: number): string;
}
