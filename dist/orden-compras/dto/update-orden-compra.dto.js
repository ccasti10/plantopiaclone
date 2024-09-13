"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrdenCompraDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_orden_compra_dto_1 = require("./create-orden-compra.dto");
class UpdateOrdenCompraDto extends (0, swagger_1.PartialType)(create_orden_compra_dto_1.CreateOrdenCompraDto) {
}
exports.UpdateOrdenCompraDto = UpdateOrdenCompraDto;
//# sourceMappingURL=update-orden-compra.dto.js.map