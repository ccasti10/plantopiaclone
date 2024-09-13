"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVentaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_venta_dto_1 = require("./create-venta.dto");
class UpdateVentaDto extends (0, mapped_types_1.PartialType)(create_venta_dto_1.CreateVentaDto) {
}
exports.UpdateVentaDto = UpdateVentaDto;
//# sourceMappingURL=update-venta.dto.js.map