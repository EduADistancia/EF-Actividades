// Carga de los datos externos
const cargarDatos = function(ruta) {
    fetch(ruta)
    .then(respuesta => respuesta.json())
    .then(datos => cargarCuestionario(datos));
}

// Modificación del HTML
function cargarCuestionario(datos) {
    let titulo = document.querySelector('#titulo');
    titulo.innerHTML = datos.titulo;
    let descripcion = document.querySelector('#descripcion');
    descripcion.textContent = datos.contenido;
    let cuestionario = document.querySelector('#cuestionario');

    for (let h of datos.habilidades) {
        let habili = document.createElement('li');
        let habiliP = document.createElement('p');
        habiliP.innerHTML = h["item"];
        habiliP.className = "habilidad";
        
        habili.append(habiliP);
        let ol = document.createElement('ol');

        for (let preg of h["preguntas"]) {
            let li = document.createElement('li');
            let pPreg = document.createElement('p');
            pPreg.innerHTML = preg["pregunta"];
            // li.innerHTML = preg["pregunta"];
            // ol.append(li);
            li.appendChild(pPreg);

            let ulPreg = document.createElement('ul');

            for (let r of Object.keys(preg["rtas"])) {
                let liPreg = document.createElement('li');
                let div = document.createElement('div');
                let chBox = document.createElement('input');
                chBox.setAttribute('type', 'radio');
                chBox.setAttribute('name', preg["pregunta"]);
                chBox.setAttribute('class', h["item"])
                chBox.setAttribute('value', r);
                chBox.setAttribute('id', preg["rtas"][r])
                let etiqueta = document.createElement('label');
                etiqueta.innerHTML = preg["rtas"][r];
                etiqueta.setAttribute('for', preg["rtas"][r]);
                div.append(chBox, etiqueta);
                // ol.append(div);
                liPreg.appendChild(div);
                ulPreg.appendChild(liPreg);
                li.append(ulPreg);
            }
            ol.append(li);
            habili.append(ol)
        }
        cuestionario.append(habili);
        // cuestionario.append(habili, ol);
    }
    
}


export { cargarDatos }