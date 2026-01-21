"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorPlantopia = void 0;
class ErrorPlantopia extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
exports.ErrorPlantopia = ErrorPlantopia;
//# sourceMappingURL=error-plantopia.js.map