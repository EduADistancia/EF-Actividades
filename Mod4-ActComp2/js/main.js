import { descargar } from "./componentes/captura.js";
import { dragndrop } from "./componentes/dragndrop.js";
import { comprobar } from "./componentes/comprobar.js";
// import { cargarDatos } from "./componentes/carga.js";
// import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
// import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
// const rutaCuestionario = './data/EF-Modulo4-Act-Quiz1.json';

window.addEventListener("DOMContentLoaded", evento => {
    dragndrop();
    // cargarDatos(rutaCuestionario);
    // setTimeout(mostrarRtaInmediata, 500);
    // setTimeout(cambiarEstiloSeleccion, 500);
});

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});

let reintentar = document.querySelector('#reintentar');
reintentar.addEventListener('click', ev => {
    window.location.reload();
});

let comprobacion = document.querySelector('#comprobar');
comprobacion.addEventListener('click',() => {
    reintentar.classList.remove('oculto');
    capturar.classList.remove('oculto');
    comprobacion.classList.add('oculto');
    comprobar();
});
