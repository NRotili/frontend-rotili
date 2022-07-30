export class Experiencia {
    id?: number;
    nombreE: string;
    descripcionE: string;
    lugarE: string;
    inicioE: Date;
    finE: Date;

    constructor(nombreE: string, descripcionE: string, lugarE: string,inicioE: Date, finE: Date){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.lugarE = lugarE;
        this.inicioE = inicioE;
        this.finE = finE;
    }
}
