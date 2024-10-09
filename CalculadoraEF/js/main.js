import { calculateDebt } from "./componentes/calculadora.js";
import { descargar } from "./componentes/captura.js";

let calcular = document.querySelector('#calcularDeuda');
calcular.addEventListener('click', calculateDebt);

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});