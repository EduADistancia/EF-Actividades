import { calculateCompoundInterest } from "./componentes/calculadora.js";
import { descargar } from "./componentes/captura.js";

async function cargarCalculadora() {
    let divCalculadora = document.querySelector('#calculatorSpace');
    let calculadora = await fetch('./site/calculadora.html')
                                .then(res => res.text());

    divCalculadora.innerHTML = calculadora;
}

window.addEventListener('DOMContentLoaded', async function () {
    await cargarCalculadora();
    let calcular = document.querySelector('#calcularIC');
    calcular.addEventListener('click', calculateCompoundInterest);
    
    let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });
})
