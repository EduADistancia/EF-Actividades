import { evaluarCuestionario } from "./evaluar.js";

function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        
        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Respuesta") {
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = 'radio';
            chBox.name = pregunta
            chBox.id = `rta${contadorId}`;
            chBox.value = Number(d["Valor"]);
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `rta${contadorId}`);
            etiqRta.innerHTML = d["Texto"]
          
            rta.append(chBox, etiqRta);
            respuestasUl.append(rta);
            divItem.append(respuestasUl, devolucionDiv);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

    let evaluar = document.querySelector('#evaluar');
    evaluar.addEventListener('click', ev => {
        evaluarCuestionario();
        ev.preventDefault();
    });

};

export { crearCuestionario }