// Barra de progreso

function updateProgressBar(avance, etiqueta) {
    let graficoBarra = `<div class="progress-container">
                            <div class="progress-bar" id="progressBar"></div>
                        </div>`
    
    etiqueta.innerHTML = graficoBarra;
    const progressBar = document.getElementById('progressBar');
    const percentage = avance; // Valor del slider como porcentaje
    progressBar.style.width = `${percentage}%`;
}

export { updateProgressBar }