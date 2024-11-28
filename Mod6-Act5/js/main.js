import { cargarDatos } from "./componentes/carga.js";
import { activarAreas } from "./componentes/dyd-validar.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo6-Act5.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(activarAreas, 500);
});

let reintentar = document.querySelector('#reintentar');
reintentar.addEventListener('click', ev => {
    window.location.reload();
});