function mostrarRtaFinal() {
    let totalPreguntas = document.querySelectorAll('div.marco');
    let rtas = document.querySelectorAll('input');
    let contador = 0;
    rtas.forEach(rta => {
        if (rta.checked) contador++;
    });  

    if (contador == totalPreguntas.length) {
        document.querySelector('#mjeFinal').classList.remove('oculto');
        scroll({top: 10000, smooth:500})
    }
    
}

export { mostrarRtaFinal }