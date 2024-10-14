// Cambio de tarjeta
function cambiarTarjeta(){
    
    // Captura de botones
    let botonAnt = document.querySelector('#anterior');
    botonAnt.addEventListener('click', ev => {
        let actual = document.querySelector('div.visible');

        if (actual.previousElementSibling !== null) {
            actual.classList.remove('visible');
            actual.classList.add('oculto');
            actual.previousElementSibling.classList.remove('oculto');
            actual.previousElementSibling.classList.add('visible');
        }         
        scroll(5, 0);
    });
    
    let botonSig = document.querySelector('#siguiente');
    botonSig.addEventListener('click', ev => {
        let actual = document.querySelector('div.visible');

        if (actual.nextElementSibling !== null){
            actual.classList.remove('visible');
            actual.classList.add('oculto');
            actual.nextElementSibling.classList.remove('oculto');
            actual.nextElementSibling.classList.add('visible');
        }
        scroll(5, 0);
    });
}


export { cambiarTarjeta }