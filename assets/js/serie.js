import Personaje from './personaje.js';

export default class Serie extends Personaje{
    constructor(id, name, species, image) {
        
        super(id, name, species, image);

    }
//Agregar más atributos del personaje
    infoModal(){
        return`
                <ul>
                    <li><span>ID: ${this.id}</span></li>
                    <li><span>Nombre: ${this.name}</span></li>
                    <li><span>Species: ${this.species}</span></li>
                </ul>
        `
    }

    infoGeneral(){
        return `
                <ul>
                    <li><span>ID: ${this.id}</span></li>
                    <li><span>Nombre: ${this.name}</span></li>
                    <li><span>Species: ${this.species}</span></li>
                </ul>
        `
    }

}

