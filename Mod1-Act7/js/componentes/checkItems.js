// Modifica el estilo de las opciones seleccionadas
function cambiarEstiloSeleccion() {
    let inputs = document.querySelectorAll('input');
    inputs.forEach(i => {
        i.addEventListener('change', ev =>{
            if (i.parentElement.classList.contains('seleccionado')) {
                i.parentElement.classList.remove('seleccionado');
            } else {
                i.parentElement.classList.add('seleccionado');
            }
            ev.preventDefault();
        });
    });
}

export { cambiarEstiloSeleccion }