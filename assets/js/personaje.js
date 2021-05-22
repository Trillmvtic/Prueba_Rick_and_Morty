export default class Personaje{
    constructor(id, name, species, image) {
        //Con estos privatizamos los atributos
        let _id = id;
        let _name = name;
        let _species = species;
        let _image = image;

        this.getId = () => _id;
        this.setId = (new_id) => _id = new_id;

        this.getName = () => _name;
        this.setName = (new_name) => _name = new_name;

        this.getSpecies = () => _species;
        this.setSpecies = (new_species) => _species = new_species;

        this.getImage = () => _image;
        this.setImage = (new_image) => _image = new_image;
    }
    //Método que retorna id
    get id() {
        return this.getId();
    }

    set id(new_id) {
        this.setId(new_id);
    }
    //Método que retorna nombre
    get name() {
        return this.getName();
    }

    set name(new_name) {
        this.setName(new_name);
    }

    get species() {
        return this.getSpecies();
    }

    set species(new_species) {
        this.setSpecies(new_species);
    }

    get image() {
        return this.getImage();
    }
    set image(new_image) {
        this.setImage(new_image);
    }

}