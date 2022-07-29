export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    descripcion: String;
    puesto: String;
    facebook: String;
    github: String;
    instagram: String;
    linkedin: String;

    constructor(nombre: String, apellido: String, img: String, descripcion: String, puesto: String, facebook: String, github: String, instagram: String, linkedin: String ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.puesto = puesto;
        this.facebook = facebook;
        this.instagram = instagram;
        this.github = github;
        this.linkedin = linkedin;
    }
}   