import { calcularSueldoNeto } from "./componentes/calculadora.js";
import { descargar } from "./componentes/captura.js";

let calcular = document.querySelector('#calcularSueldo');
calcular.addEventListener('click', calcularSueldoNeto);

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});