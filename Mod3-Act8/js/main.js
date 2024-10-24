import { descargar } from "./componentes/captura.js";
import { dragndrop } from "./componentes/dragndrop.js";
import { comprobar } from "./componentes/comprobar.js";
import { cargarDatos } from "./componentes/cargar.js";
import { crearTablas } from "./componentes/tablas.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo3-Act8.json';

window.addEventListener("DOMContentLoaded", async function () {
    let datos = await cargarDatos(rutaCuestionario);
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
