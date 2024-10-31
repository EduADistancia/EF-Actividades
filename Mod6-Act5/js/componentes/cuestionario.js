function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let idFrase;
    let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        

        if (d["Tipo"] === "Frase"){
            idFrase = `frase${contadorId}`;
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.className = 'completar';
            preguntaP.innerHTML = d["Texto"];
            preguntaP.childNodes.forEach(da =>{
                if (da.nodeName === 'SPAN') {
                    da.classList.add('drop-area');
                    da.id = idFrase
                }
            });

            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Palabra") {
            let rta = document.createElement('li');
            
            let palabra = document.createElement('span');
            palabra.className = 'word';
            palabra.draggable = true;
            palabra.id = `rta${contadorId}`;
            palabra.setAttribute('name', idFrase);
            palabra.innerHTML = d["Texto"]
            
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'marco oculto';
            devolucionP.setAttribute('name', `rta${contadorId}`);
            devolucionP.innerText = d["Devolucion"];

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
            
            img.setAttribute('name', `rta${contadorId}`);
            img.className = 'imgEstado oculto';

            devolucionDiv.append(devolucionP, img);
            rta.append(palabra);
            respuestasUl.append(rta);
            divItem.append(respuestasUl, devolucionDiv);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }