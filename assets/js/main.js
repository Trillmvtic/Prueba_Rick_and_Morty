import Serie from './serie.js';

//Función IIFE
let llamadoPersonajes = (()=>{
    
    const urlBase = 'https://rickandmortyapi.com/api/character';
    const resultados = document.querySelector('#resultados');
    let datosPersonajes; //Guardo los datos de los personajes ya en formato json

    let obtenerPersonajes = async () => {
        try {
            let respuesta = await fetch(urlBase);
            let datos = await respuesta.json();
            datosPersonajes = datos;
            //console.log(datosPersonajes);     //Retorna los datos de los personajes
            return datos;

        } catch (error) {
            console.error(error);
            
        }
    }

    let llamandoDetalle = async (idPersonaje) => {
        try {

            let respuesta = await fetch(`${urlBase}/${idPersonaje}`);
            let data = await respuesta.json();
            const {id, name, species, image} = data;
            const infoPersonaje = new Serie(id, name, species, image);
            let detallePersonaje = document.querySelector(`#person-${idPersonaje}`);
            let detalle = `${infoPersonaje.infoGeneral()}`;
            let ventanaModal = document.querySelector(`#personModal-${idPersonaje}`);
            let modalPersonaje = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${infoPersonaje.name}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ${infoPersonaje.infoModal()}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            
            `;
            detallePersonaje.innerHTML = detalle;
            ventanaModal.innerHTML= modalPersonaje;
            
        } catch (error) {
            
        }
    }

    return {
        mostrando: async () => {
            const personajes = await obtenerPersonajes();
            const respuestaPersonajes = await personajes.results;
            respuestaPersonajes.forEach(element => {
                resultados.innerHTML += `
                <div class="col-12 col-sm-6 col-md-6 col-lg-4 ">
                    <img src="${element.image}" data-toggle="modal" data-target="#personModal-${element.id}" alt="${element.id}" class="img-fluid">
                    <div class="d-inline-block detallePersonaje" id="person-${element.id}">
                        ${llamandoDetalle(element.id)}
                    </div>
                    <div class="modal fade" id="personModal-${element.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    </div>
                </div>
            `;
            });
        },

        funcionPublica: () => {
            let cantidadPersonajes = document.querySelector("#cantidadPersonajes");
            let spinnerBorder = document.querySelector(".spinner-border");
            spinnerBorder.remove();
            cantidadPersonajes.innerHTML = datosPersonajes.results.length;
        }
    }



})();


llamadoPersonajes.mostrando();

function resolveDespues3Segundos() {
    return new Promise(resolve =>{
        setTimeout(()=>{
            llamadoPersonajes.funcionPublica();
        },2000);
    })

};

resolveDespues3Segundos();
