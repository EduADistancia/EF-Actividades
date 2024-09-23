import { cargarDatos } from "./componentes/cuestionario.js";
import { calcular } from "./componentes/evaluar.js";
import { cambiarTarjeta } from "./componentes/carousel.js";

// Ruta del cuestionario
const rutaCuestionario = './datos/data.json';

window.addEventListener("DOMContentLoaded", evento => {
    cargarDatos(rutaCuestionario);
    setTimeout(cambiarTarjeta, 300);
});


let form = document.querySelector('form');
form.addEventListener('submit', ev => {
    calcular();
    ev.preventDefault();
});