// Despliega respuesta oculta

function mostrarRtaInmediata() {
    let opciones = document.querySelectorAll('.botonDesplegar');
    opciones.forEach(op => {
        let identificador = op.name;
        op.addEventListener('click', function() {
            let devolucion = document.querySelector(`div[name=${identificador}]`);

            if (devolucion.classList.contains('oculto')){
                devolucion.classList.remove('oculto');
                op.textContent = 'Ocultar respuesta';
            } else {
                devolucion.classList.add('oculto');
                op.textContent = 'Mostrar respuesta';
            }
        });
    });
}

export { mostrarRtaInmediata }