"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDespachoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_despacho_dto_1 = require("./create-despacho.dto");
class UpdateDespachoDto extends (0, mapped_types_1.PartialType)(create_despacho_dto_1.CreateDespachoDto) {
}
exports.UpdateDespachoDto = UpdateDespachoDto;
//# sourceMappingURL=update-despacho.dto.js.map