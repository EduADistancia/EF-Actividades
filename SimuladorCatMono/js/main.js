import { cargar } from "./componentes/cargaDatos.js";
import { calcularCategoria } from "./componentes/simulador.js";
import { descargar } from "./componentes/captura.js";


window.addEventListener("DOMContentLoaded", async function () {
    let categorias = await cargar();
    let calcular = document.querySelector('#calcularCat');
    calcular.addEventListener('click', ev => {
        calcularCategoria(categorias);
    });
});

let capturar = document.getElementById('descarga');
capturar.addEventListener('click', ev => {
    descargar('#captura');
});