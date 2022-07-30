export class Proyecto {

    id?: number;
    nombreP: string;
    descripcionP: string;
    fechaP: string;
    urlP: string;
    empresaP: string;

    constructor(nombreP: string, descripcionP: string, fechaP: string, urlP: string, empresaP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fechaP = fechaP;
        this.urlP = urlP;
        this.empresaP = empresaP;
    }
}
