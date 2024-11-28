import { dragndrop } from "./componentes/dragndrop.js";
import { comprobar } from "./componentes/comprobar.js";
import { cargarDatos } from "./componentes/cargar.js";
import { crearTablas } from "./componentes/tablas.js";

// Ruta del cuestionario
const rutaCuestionario = './data/EF-Modulo5-Act4.json';

window.addEventListener("DOMContentLoaded", async function () {
    let datos = await cargarDatos(rutaCuestionario);
    // console.log(datos);
    crearTablas(datos);
    dragndrop();
});

let reintentar = document.querySelector('#reintentar');
reintentar.addEventListener('click', ev => {
    window.location.reload();
});

let comprobacion = document.querySelector('#comprobar');
comprobacion.addEventListener('click',() => {
    reintentar.classList.remove('oculto');
    comprobacion.classList.add('oculto');
    comprobar();
});
