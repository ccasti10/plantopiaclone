"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePlantaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_planta_dto_1 = require("./create-planta.dto");
class UpdatePlantaDto extends (0, swagger_1.PartialType)(create_planta_dto_1.CreatePlantaDto) {
}
exports.UpdatePlantaDto = UpdatePlantaDto;
//# sourceMappingURL=update-planta.dto.js.map