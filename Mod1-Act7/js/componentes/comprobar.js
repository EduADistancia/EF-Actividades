function comprobar() {
    let checks = document.querySelectorAll('input');
    checks.forEach(c => {
        let img = document.querySelector(`img[name=${c.id}]`)

        if (Number(c.checked) == Number(c.value)) {
            img.src = './img/correcto.png';
        } else {
            img.src = './img/incorrecto.png';
        }
    });
    let rtas = document.querySelectorAll('div.rtas');
    rtas.forEach(r => {
        r.classList.remove('oculto');
        r.classList.add('devRtas');
    });
}

export { comprobar }