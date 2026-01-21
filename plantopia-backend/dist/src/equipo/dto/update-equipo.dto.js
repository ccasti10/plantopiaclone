"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEquipoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_equipo_dto_1 = require("./create-equipo.dto");
class UpdateEquipoDto extends (0, swagger_1.PartialType)(create_equipo_dto_1.CreateEquipoDto) {
}
exports.UpdateEquipoDto = UpdateEquipoDto;
//# sourceMappingURL=update-equipo.dto.js.map