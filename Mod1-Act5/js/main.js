import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/desplegar.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo1-Act5.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(mostrarRtaInmediata, 500);
});

let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });