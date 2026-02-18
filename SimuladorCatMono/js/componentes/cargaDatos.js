// Carga de datos

async function cargar() {
    let afipData;
    let msg;
    
    try {
        afipData = await obtenerDatosAFIP();
    } catch (error) {
        msg= `<span style="display: block; text-align: center;"><b>Error al consultar datos en ARCA. Se utilizarán datos almacenados de Octubre/24.</b></span>`;
        document.getElementById("result").innerHTML = msg;
        document.getElementById("result").style.display = "block";
        
        // Plan B: se cargan datos fijos de ./data/datos.json (Octubre 2024).
        afipData = await fetch("./data/datos.json")
                            .then(respuesta => respuesta.json());
    }
    
    return afipData;
};


// De AFIP
async function obtenerDatosAFIP() {

    // Conecto a la pagina y extraigo los datos de la tabla recorriendo las celdas 
    const response = await fetch('https://www.afip.gob.ar/monotributo/categorias.asp');
    const text = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    const tabla = doc.querySelector('.cont-tabla-valores-monotributo table tbody');

    const datos = Array.from(tabla.querySelectorAll('tr')).map(row => {
        const th = row.querySelector('th');
        const cells = row.querySelectorAll('td');

        if (cells.length >= 5) {
            return {
                categoria: th ? th.innerText.trim() : '',
                ingresos: cells[0] ? cells[0].innerText.trim() : '',
                superficie: cells[1] ? cells[1].innerText.trim() : '',
                energia: cells[2] ? cells[2].innerText.trim() : '',
                alquileres: cells[3] ? cells[3].innerText.trim() : '',
                precio: cells[4] ? cells[4].innerText.trim() : ''
            };
        } else {
            return {
                categoria: th ? th.innerText.trim() : '',
                ingresos: '',
                superficie: '',
                energia: '',
                alquileres: '',
                precio: ''
            };
        }
    });

    return datos;
}

export { cargar }