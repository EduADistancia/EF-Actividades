import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";
import { comprobar } from "./componentes/comprobar.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo1-Act7-check.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(cambiarEstiloSeleccion, 500);
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
