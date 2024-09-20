// Botón de captura y descarga
let descargar = document.getElementById('descarga');
descargar.addEventListener('click', function() {
        html2canvas(document.getElementById('captura'))
            .then(function(canvas) {

            // Convert the canvas to a data URL
            const dataURL = canvas.toDataURL('image/png');

            // Create an anchor element
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = 'descarga.png';
            
            // Trigger a click event on the anchor to start the download
            link.click();
    });
});