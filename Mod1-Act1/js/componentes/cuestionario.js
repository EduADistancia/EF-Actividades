function crearCuestionario(datos){
    // Cantidad de tarjetas del carrousel
    let totalTarjetas = 0;
    datos.forEach(dato => {
        if (dato["Tipo"] === "Pregunta") totalTarjetas++; 
    });
    let tarjeta, contadorTarjeta;

    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;
    let idRta = 0;

    for (let d of datos) {
        
        if (d["Tipo"] === "Titulo") {
            tarjeta = document.createElement('div');
            tarjeta.classList = ['tarjetaDinamica'];
            contadorTarjeta = document.createElement('p');
            contadorTarjeta.style.textAlign = 'center';
            contadorTarjeta.className = 'contadorTarjeta';
            contadorTarjeta.innerHTML = `${contadorId + 1} de ${totalTarjetas}`;
            
            if (contadorId == 0){
                tarjeta.classList.add('visible')
            } else {
                tarjeta.classList.add('oculto')
            }
            
            let subtitulo = document.createElement('h3');
            subtitulo.innerHTML = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            divItem.append(subtitulo);
            
            contadorId++;

        } else if (d["Tipo"] === "Descripcion") {
            let caso = document.createElement('p');
            caso.innerHTML = d["Texto"];
            divItem.append(caso);

        } else if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Respuesta") {
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = d["Etiqueta"];
            chBox.name = pregunta
            chBox.id = `rta${idRta}`;
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `rta${idRta}`);
            etiqRta.innerHTML = d["Texto"]
            
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'marco oculto';
            devolucionP.setAttribute('name', `rta${idRta}`);
            devolucionP.innerText = d["Devolucion"];

            devolucionDiv = document.createElement('div');
            let img = document.createElement('img');
        
            if (d["Estado"]) {
                img.setAttribute('src', './img/correcto.png');
                img.setAttribute('alt', 'Correcto');
                devolucionP.classList.add('marcoOK');
            } else {
                img.setAttribute('src', './img/incorrecto.png');
                img.setAttribute('alt', 'Incorrecto');
                devolucionP.classList.add('marcoNoOk');
            }
            
            img.setAttribute('name', `rta${idRta}`);
            img.className = 'imgEstado oculto';

            devolucionDiv.append(devolucionP, img);
            rta.append(chBox, etiqRta, devolucionDiv);
            respuestasUl.append(rta);
            divItem.append(respuestasUl);

            idRta++;
        }

        tarjeta.append(divItem, contadorTarjeta);
        contenidoDinamico.append(tarjeta);
    }

};

export { crearCuestionario }