// Modifica el estilo de las opciones seleccionadas
function cambiarEstiloSeleccion() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(i => {
        i.addEventListener('change', ev =>{
            if (i.type == "radio") {
                // Cargo las opciones
                let etiq = i.parentElement.parentElement;
                // Limpio otras selecciones
                etiq.childNodes.forEach(c => {
                    c.classList.remove('seleccionado');
                    c.childNodes[2].childNodes.forEach(j => j.classList.add('oculto'));
                    c.childNodes[2].childNodes.forEach(j => j.classList.remove('visible'));
                });
                i.parentElement.classList.add('seleccionado');
                i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.remove('oculto'));
                i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.add('visible'));
            } else if (i.type == "checkbox") {
                if (i.parentElement.classList.contains('seleccionado')) {
                    i.parentElement.classList.remove('seleccionado');
                    i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.add('oculto'));
                    i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.remove('visible'));
                } else {
                    i.parentElement.classList.add('seleccionado');
                    i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.remove('oculto'));
                    i.nextElementSibling.nextElementSibling.childNodes.forEach(j => j.classList.add('visible'));
                }
            }

            ev.preventDefault();
        });
    });

    let selects = document.querySelectorAll('select');
    selects.forEach(s => {
        s.addEventListener('change', ev =>{
            s.parentElement.classList.add('seleccionado');
        });
    });
}

export { cambiarEstiloSeleccion }