import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";
import { descargar } from "./componentes/captura.js";
import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";

// Ruta del cuestionario
const rutaCuestionario = './data/CuestionarioPuntoDePartida-Emprendedorismo.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(mostrarRtaInmediata, 500);
    setTimeout(cambiarEstiloSeleccion, 300)
});

let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });