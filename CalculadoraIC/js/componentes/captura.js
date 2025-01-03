// Botón de captura y descarga
let descargar = async function (fragmento) {
    await import("https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js");
    document.querySelector('#descarga').classList.add('oculto');
    html2canvas(document.querySelector(fragmento))
        .then(function(canvas) {

        // Convert the canvas to a data URL
        const dataURL = canvas.toDataURL('image/png');

        // Fecha en nombre de archivo
        let hoy = new Date(Date.now());
        let fecha = `${hoy.getDate()}-${hoy.getMonth()+1}-${hoy.getFullYear()}`

        // Create an anchor element
        const link = document.createElement('a');
        link.href = dataURL;
        link.download = `calculoIntCompuesto${fecha}.png`;
        
        // Trigger a click event on the anchor to start the download
        link.click();
        });
    document.querySelector('#descarga').classList.remove('oculto');
};


export { descargar }