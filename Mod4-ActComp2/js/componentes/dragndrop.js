// Arrastrar las filas
function dragndrop () {
    /* Incluídos dispositivos móbiles */
    const filas = document.querySelectorAll('#datos tr.ordenar');
    let filaArrastrada = null;
    let touchStartY = 0;
    let touchTarget = null;

    filas.forEach(fila => {
        // Eventos para dispositivos de escritorio
        fila.addEventListener('dragstart', function (e) {
            filaArrastrada = this;
            e.dataTransfer.effectAllowed = 'move';
            this.classList.add('dragging');
        });

        fila.addEventListener('dragend', function () {
            filaArrastrada = null;
            this.classList.remove('dragging');
        });

        fila.addEventListener('dragover', function (e) {
            e.preventDefault();
        });

        fila.addEventListener('drop', function (e) {
            e.preventDefault();
            intercambiarFilas(this);
        });

        // Eventos para dispositivos táctiles
        fila.addEventListener('touchstart', function (e) {
            touchStartY = e.touches[0].clientY;
            touchTarget = this;
            this.classList.add('dragging');
        });

        fila.addEventListener('touchmove', function (e) {
            e.preventDefault(); // Prevenir el desplazamiento de la página mientras se arrastra
            const currentY = e.touches[0].clientY;
            const elementBelow = document.elementFromPoint(e.touches[0].clientX, currentY);

            if (elementBelow && elementBelow.tagName === 'TD') {
                const filaDebajo = elementBelow.parentNode;
                if (filaDebajo !== touchTarget && filaDebajo.parentElement.parentElement.id === "datos") {
                    intercambiarFilas(filaDebajo);
                }
            }
        });

        fila.addEventListener('touchend', function () {
            touchTarget = null;
            this.classList.remove('dragging');
        });
    });

    function intercambiarFilas(filaObjetivo) {
        if (filaArrastrada && filaArrastrada !== filaObjetivo) {
            const tabla = filaObjetivo.parentNode;
            const filaSiguiente = (filaObjetivo === filaArrastrada.nextSibling) ? filaObjetivo.nextSibling : filaObjetivo;
            tabla.insertBefore(filaArrastrada, filaSiguiente);
        } else if (touchTarget && touchTarget !== filaObjetivo) {
            const tabla = filaObjetivo.parentNode;
            const filaSiguiente = (filaObjetivo === touchTarget.nextSibling) ? filaObjetivo.nextSibling : filaObjetivo;
            tabla.insertBefore(touchTarget, filaSiguiente);
        }
    }
}

export { dragndrop }