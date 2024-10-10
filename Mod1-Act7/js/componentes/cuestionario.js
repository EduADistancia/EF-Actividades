function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem = document.createElement('div');
    divItem.className = 'marco';
    
    let contador = 0;

    for (let d of datos) {
        let divOpcion = document.createElement('div');
        divOpcion.className = 'marco checkOp'
        
        let checkOp = document.createElement('input');
        checkOp.type = 'checkbox';
        checkOp.value = d["Valor"];
        checkOp.id = `op${contador}`;

        let etiqCh = document.createElement('label');
        etiqCh.innerHTML = d['Opcion'];
        etiqCh.setAttribute('for', `op${contador}`)

        let divDevolucion = document.createElement('div');
        divDevolucion.className = 'oculto rtas';

        let imgDev = document.createElement('img');
        imgDev.classList = 'imgEstado';
        imgDev.setAttribute('name', `op${contador}`);

        let pDev = document.createElement('p');
        pDev.className = 'marco';
        pDev.innerHTML = d['Devolucion'];

        divDevolucion.append(pDev, imgDev);

        divOpcion.append(etiqCh, checkOp);
        divItem.append(divOpcion, divDevolucion);

        contador++;
    }

    contenidoDinamico.append(divItem);
};

export { crearCuestionario }