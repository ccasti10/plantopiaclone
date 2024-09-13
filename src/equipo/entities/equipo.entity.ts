
export class Equipo{

    nombreArea:string;
    jefe:string;
    miembros:string[]=[];


    constructor(nombreArea:string,jefe:string,miembros:string[]){
        this.nombreArea=nombreArea;
        this.jefe=jefe;
        this.miembros=miembros
    }
}