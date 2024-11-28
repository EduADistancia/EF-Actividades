import { cambiarTarjeta } from "./componentes/carousel.js";
import { cargarDatos } from "./componentes/carga.js";
import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo1-Act1.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(cambiarTarjeta, 300);
    setTimeout(mostrarRtaInmediata, 500);
    setTimeout(cambiarEstiloSeleccion, 500);
});