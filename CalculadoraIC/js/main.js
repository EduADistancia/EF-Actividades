import { calculateCompoundInterest } from "./componentes/calculadora.js";
import { descargar } from "./componentes/captura.js";

let calcular = document.querySelector('#calcularIC');
calcular.addEventListener('click', calculateCompoundInterest);

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});