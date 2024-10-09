// Muestra de respuesta de acuerdo a opción seleccionada

function mostrarRtaInmediata() {
    let opciones = document.querySelectorAll('input');
    opciones.forEach(op => {
        let idInput = op.id;
        op.addEventListener('change', function() {
            let devolucion = document.querySelector(`p[name=${idInput}]`);
            devolucion.classList.remove('oculto');
            devolucion.classList.add('visible');

            if (devolucion.nextElementSibling !== null){
                if (devolucion.nextElementSibling.classList.contains('visible')) {
                    devolucion.nextElementSibling.classList.remove('visible');
                    devolucion.nextElementSibling.classList.add('oculto');
                }
            }
            
            if (devolucion.previousElementSibling !== null) {
                if (devolucion.previousElementSibling.classList.contains('visible')) {
                    devolucion.previousElementSibling.classList.remove('visible');
                    devolucion.previousElementSibling.classList.add('oculto');
    
                }
            }
        });
    });
}

export { mostrarRtaInmediata }