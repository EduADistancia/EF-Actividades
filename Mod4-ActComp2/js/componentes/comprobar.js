function comprobar(){
    let nodeOrden = document.querySelectorAll('.orden');
    let nodeOrdenar = document.querySelectorAll('.ordenar');

    for (let i=0; i < nodeOrden.length; i++) {
        let img = document.createElement('img');
        img.classList.add('imgEstado');

        if (nodeOrden[i].innerHTML === nodeOrdenar[i].getAttribute('name')) {
            img.src = './img/correcto.png';
        } else {
            img.src = './img/incorrecto.png';
        }

        nodeOrden[i].innerHTML = '';
        nodeOrden[i].appendChild(img);
        nodeOrdenar[i].setAttribute('draggable', 'false');
    }
    document.querySelector('#conclusion').classList.remove('oculto');
}

export { comprobar }