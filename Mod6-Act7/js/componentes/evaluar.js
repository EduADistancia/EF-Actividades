import { updateProgressBar } from "./barra.js";
import { descargar } from "./captura.js";

function evaluarCuestionario() {
    let valores = document.querySelectorAll('input[type=radio]:checked');
    let total = 0;

    valores.forEach(v => total += Number(v.value));
    console.log("Puntaje total: ", total);
    graficar(total);
}

async function graficar(puntajeTotal){
    // Cambio de contenido en página
    let principal = document.querySelector('.contPpal');
    let docuHTML = await fetch("./resultado.html")
                            .then(respuesta => respuesta.text());
    principal.innerHTML = docuHTML;

    // Cálculo del máximo puntaje
    let data1 = await fetch("./data/EF-Modulo6-Act7-Puntajes.json")
                            .then(respuesta => respuesta.json());
    let maxPuntaje = 0;
    
    for (let d of data1) {
        if (Number(d["Puntaje"]) > maxPuntaje) maxPuntaje = Number(d["Puntaje"]);
    }

    // GRÁFICO BARRA DE PROGRESO
    let progressPercentBar = Math.round((puntajeTotal/maxPuntaje)*100);
    let chart1 = document.querySelector("#chart");
    updateProgressBar(progressPercentBar, chart1);
    
    let dev = document.querySelector('#salida');
    
    for (let d of data1) {
        if (puntajeTotal <= Number(d["Puntaje"])) {
            let perfil = document.querySelector('#perfilInv')
            perfil.textContent = d["Titulo"]
            let p = document.createElement('p');
            p.className = 'marco'
            p.innerHTML = d["Devolucion"];
            dev.append(p);
            break;
        }
    }

    let capturar = document.getElementById('descarga');
    capturar.addEventListener('click', ev => {
        descargar('#captura');
    });
}

export { evaluarCuestionario }