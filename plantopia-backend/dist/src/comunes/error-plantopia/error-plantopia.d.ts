export declare class ErrorPlantopia extends Error {
    readonly statusCode: number;
    constructor(message: string, statusCode: number);
}
