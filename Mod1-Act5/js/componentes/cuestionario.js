function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        let identificador = `pregunta${contadorId}`;

        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            devolucionDiv = document.createElement('div');
            devolucionDiv.classList = 'seleccionado oculto';

        } else if (d["Tipo"] === "Respuesta") {
            let rta = document.createElement('div');
            
            let botonMostrar = document.createElement('button');
            botonMostrar.classList = 'botonDesplegar colorFondo1';
            botonMostrar.setAttribute('name', identificador);
            botonMostrar.innerHTML = d["Texto"]
            
            let devolucionT = document.createElement('h3');
            devolucionT.textContent = d['TituloDevolucion'];

            let devolucionP = document.createElement('p');
            devolucionP.className = 'marco';
            devolucionP.innerText = d["TextoDevolucion"];

            devolucionDiv.append(devolucionT, devolucionP);
            devolucionDiv.setAttribute('name', identificador);
            rta.append(botonMostrar, devolucionDiv);
            divItem.append(rta);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }