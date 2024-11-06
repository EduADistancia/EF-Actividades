import { calcularSueldoNeto } from "./componentes/calculadora.js";

let calcular = document.querySelector('#calcularSueldo');
calcular.addEventListener('click', calcularSueldoNeto);