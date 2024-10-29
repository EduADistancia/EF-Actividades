import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo3-Act10.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(mostrarRtaInmediata, 500);
    setTimeout(cambiarEstiloSeleccion, 500);
});

let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });