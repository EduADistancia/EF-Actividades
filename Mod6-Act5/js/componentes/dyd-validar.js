function activarAreas() {
    const dropArea = document.querySelectorAll('.drop-area');
    dropArea.forEach(da => dragndrop(da));
}

function dragndrop(dropArea){
    let idDropArea = dropArea.id;
    const words = document.querySelectorAll(`span[name=${idDropArea}]`);

    // Variable para almacenar el elemento que se está arrastrando
    let draggedElement = null;

    // Añadir los event listeners para arrastrar y soltar en desktop
    words.forEach(word => {
        word.addEventListener('dragstart', dragStart);
        word.addEventListener('dragend', dragEnd);
        word.addEventListener('touchstart', touchStart);
        word.addEventListener('touchmove', touchMove);
        word.addEventListener('touchend', touchEnd);
    });
    
    dropArea.addEventListener('dragover', dragOver);
    dropArea.addEventListener('dragleave', dragLeave);
    dropArea.addEventListener('drop', drop);

    function dragStart(event) {
        draggedElement = event.target;
        setTimeout(() => {
            event.target.style.opacity = '0.5';
        }, 0);
    }

    function dragEnd(event) {
        event.target.style.opacity = '1';
        draggedElement = null;
    }

    function dragOver(event) {
        event.preventDefault();
        dropArea.classList.add('drop-highlight');
    }

    function dragLeave(event) {
        dropArea.classList.remove('drop-highlight');
    }

    function drop(event) {
        event.preventDefault();
        if (draggedElement) {

            // Elimina contenido anterior y oculta respuesta
            if (dropArea.childNodes[0]) {
                let eliminar = dropArea.childNodes[0];
                let rtaVista = document.querySelector(`p[name="${eliminar.id}"]`);
                if (rtaVista) {
                    rtaVista.classList.add('oculto');
                    rtaVista.nextElementSibling.classList.add('oculto');
                }
                dropArea.removeChild(eliminar);
            }
            
            dropArea.appendChild(draggedElement);
            let rta = document.querySelector(`p[name="${draggedElement.id}"]`);
            rta.classList.remove('oculto');
            rta.nextElementSibling.classList.remove('oculto');
            draggedElement.style.opacity = '1';
            dropArea.classList.remove('drop-highlight');
        }
    }

    // Funciones para móviles
    function touchStart(event) {
        draggedElement = event.target;
        event.target.style.opacity = '0.5';
        event.target.style.zIndex = '1000';
    }

    function touchMove(event) {
        if (draggedElement) {

            const touch = event.touches[0];
            draggedElement.style.position = 'absolute';
            draggedElement.style.left = `${touch.clientX - draggedElement.offsetWidth / 2}px`;
            draggedElement.style.top = `${touch.clientY - draggedElement.offsetHeight / 2}px`;
    
            // Evitar el scroll en móviles
            event.preventDefault();
    
            const dropAreaRect = dropArea.getBoundingClientRect();
    
            if (touch.clientX >= dropAreaRect.left &&
                touch.clientX <= dropAreaRect.right &&
                touch.clientY >= dropAreaRect.top &&
                touch.clientY <= dropAreaRect.bottom) {
                dropArea.classList.add('drop-highlight');
            } else {
                dropArea.classList.remove('drop-highlight');
            }
        }
    }

    function touchEnd(event) {
        event.preventDefault();
        const touch = event.changedTouches[0];
        const dropAreaRect = dropArea.getBoundingClientRect();
        
        
        if (touch.clientX >= dropAreaRect.left &&
            touch.clientX <= dropAreaRect.right &&
            touch.clientY >= dropAreaRect.top &&
            touch.clientY <= dropAreaRect.bottom) {

            if (dropArea.childNodes[0]) {
                let eliminar = dropArea.childNodes[0];
                let rtaVista = document.querySelector(`p[name=${eliminar.id}]`);

                if (rtaVista) {
                    rtaVista.classList.add('oculto');
                    rtaVista.nextElementSibling.classList.add('oculto');
                }

                dropArea.removeChild(eliminar);
            }
            
            dropArea.appendChild(draggedElement);
            let rta = document.querySelector(`p[name=${draggedElement.id}]`);
            rta.classList.remove('oculto');
            rta.nextElementSibling.classList.remove('oculto');
            // draggedElement.style.opacity = '1';
            // dropArea.classList.remove('drop-highlight')
        }
        draggedElement.style.opacity = '1';
        dropArea.classList.remove('drop-highlight');
        draggedElement.style.position = 'static';
        draggedElement.style.zIndex = 'initial';
        draggedElement = null;

        
    }
}


export { activarAreas }