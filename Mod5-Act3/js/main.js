import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { activarAreas } from "./componentes/dyd-validar.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo5-Act3.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(activarAreas, 500);
});

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});

let reintentar = document.querySelector('#reintentar');
reintentar.addEventListener('click', ev => {
    window.location.reload();
});