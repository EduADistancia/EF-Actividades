import { descargar } from "./componentes/captura.js";
import { dragndrop } from "./componentes/dragndrop.js";
import { comprobar } from "./componentes/comprobar.js";
import { cargarDatos } from "./componentes/cargar.js";
import { crearTablas } from "./componentes/tablas.js";
// import { mostrarRtaInmediata } from "./componentes/rtaInmediata.js";
// import { cambiarEstiloSeleccion } from "./componentes/checkItems.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo5-Act4.json';

window.addEventListener("DOMContentLoaded", async function () {
    let datos = await cargarDatos(rutaCuestionario);
    // console.log(datos);
    crearTablas(datos);
    dragndrop();
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
