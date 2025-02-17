import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo4-Act-Comp3.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(mostrarRtaInmediata, 500);
    setTimeout(cambiarEstiloSeleccion, 500);
});