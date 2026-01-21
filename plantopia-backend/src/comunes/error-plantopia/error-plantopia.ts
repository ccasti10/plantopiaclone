export class ErrorPlantopia extends Error{
    public readonly statusCode: number;

    constructor(message: string, statusCode: number) {
      super(message);/*llama al constructor de la clase Error con el argumento message. Esto asegura que todas las
                       propiedades y comportamientos definidos en la clase Error se configuren correctamente.*/
      this.statusCode = statusCode;
      
    }
}
