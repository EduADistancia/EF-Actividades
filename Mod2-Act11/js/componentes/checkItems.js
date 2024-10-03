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
                    c.childNodes.forEach(j => { 
                        if (j.nodeName === 'DIV') {
                            j.childNodes.forEach(k => {
                                k.classList.remove('visible');
                                k.classList.add('oculto');
                            });
                        }
                    });
                });
                i.parentElement.classList.add('seleccionado');
                i.parentElement.childNodes.forEach(j => { 
                    if (j.nodeName === 'DIV') {
                        j.childNodes.forEach(k => {
                            k.classList.remove('oculto');
                            k.classList.add('visible');
                        });
                    }
                });
            }
        });
    });
}

export { cambiarEstiloSeleccion }