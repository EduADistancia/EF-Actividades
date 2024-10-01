import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo2-Actividad12.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(mostrarRtaInmediata, 500);
    setTimeout(cambiarEstiloSeleccion, 500);
});

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});

let reintentar = document.querySelector('#reintentar');
reintentar.addEventListener('click', ev => {
    window.location.reload();
    scroll(5, 0);
    ev.preventDefault();
});