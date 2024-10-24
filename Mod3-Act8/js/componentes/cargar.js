// Carga de los datos externos
async function cargarDatos(ruta) {
    let data = await fetch(ruta)
                        .then(respuesta => respuesta.json());
    return data;
}

export { cargarDatos }