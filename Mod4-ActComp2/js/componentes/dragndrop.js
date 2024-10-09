// Arrastrar las filas
function dragndrop () {
    // Script para manejar el arrastre e intercambio de filas
    const filas = document.querySelectorAll('tr[draggable="true"]');
    let filaArrastrada = null;

    filas.forEach(fila => {
        fila.addEventListener('dragstart', () => {
            filaArrastrada = fila;
            fila.classList.add('dragging');
        });

        fila.addEventListener('dragend', () => {
            filaArrastrada = null;
            fila.classList.remove('dragging');
        });

        fila.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        fila.addEventListener('drop', () => {
            if (filaArrastrada) {
                const parent = fila.parentNode;
                const rows = [...parent.querySelectorAll('tr')];

                const indexArrastrada = rows.indexOf(filaArrastrada);
                const indexDestino = rows.indexOf(fila);

                if (indexArrastrada < indexDestino) {
                    parent.insertBefore(filaArrastrada, fila.nextSibling);
                } else {
                    parent.insertBefore(filaArrastrada, fila);
                }
            }
        });
    });
}

export { dragndrop }