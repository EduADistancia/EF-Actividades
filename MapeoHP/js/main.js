import { cargarDatos } from "./componentes/cuestionario.js";
import { calcular } from "./componentes/evaluar.js";

// Ruta del cuestionario
const rutaCuestionario = './datos/data.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
});


let form = document.querySelector('form');
form.addEventListener('submit', ev => {
    calcular();
    ev.preventDefault();
});