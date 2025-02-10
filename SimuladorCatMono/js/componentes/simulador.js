// Cálculo de categoria

function calcularCategoria(afipData) {
    const ingresos = parseFloat(document.getElementById("ingresos").value);
    const superficie = parseFloat(document.getElementById("superficie").value);
    const energia = parseFloat(document.getElementById("energia").value);
    const alquileres = parseFloat(document.getElementById("alquileres").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const resultDiv = document.getElementById("result");

    let categoria = "";
    let row;
    let mensaje = "";

    if (!ingresos) {
        alert("Debe escribir datos en el campo Ingresos");
        return;
    } else {
        if (ingresos > 68000000) {
            mensaje = `<span style="display: block; text-align: center;"><b>Debes inscribirte en el Régimen General.</b></span>`;
            row = 99;
        } else {

            if (ingresos <= 1270000) {
                categoria = "Categoría A";
                row = 0;
            } else if (ingresos <= 2375000) {
                categoria = "Categoría B";
                row = 1;
            } else if (ingresos <= 3600000) {
                categoria = "Categoría C";
                row = 2;
            } else if (ingresos <= 6000000) {
                categoria = "Categoría D";
                row = 3;
            } else if (ingresos <= 19350000) {
                categoria = "Categoría E";
                row = 4;
            } else if (ingresos <= 24250000) {
                categoria = "Categoría F";
                row = 5;
            } else if (ingresos <= 29000000) {
                categoria = "Categoría G";
                row = 6;
            } else if (ingresos <= 44000000) {
                categoria = "Categoría H";
                row = 7;
            } else if (ingresos <= 49250000) {
                categoria = "Categoría I";
                row = 8;
            } else if (ingresos <= 56400000) {
                categoria = "Categoría J";
                row = 9;
            } else if (ingresos <= 68000000) {
                categoria = "Categoría K";
                row = 10;
            }

            mensaje += `Tu categoría es: ${categoria}<br>`;
        }
    }
    if (Number(row) !== 99) {
        if (afipData) {
            mensaje += "<br><strong>Comparación con datos de ARCA:</strong><br>";
            mensaje += compararDatosAfip(row, ingresos, superficie, energia, alquileres, precio, afipData);
        }
    }

    resultDiv.innerHTML = mensaje;
    resultDiv.style.display = "block";
    resultDiv.classList.remove('oculto');
}

function compararDatosAfip(row, ingresos, superficie, energia, alquileres, precio, afipData) {
    let comparacion = "";

    comparacion += `- Ingresos hasta: ${afipData[row].ingresos}<br>`;
    comparacion += `- Superficie afectada: ${afipData[row].superficie}<br>`;
    comparacion += `- Energía eléctrica consumida anualmente: ${afipData[row].energia}<br>`;
    comparacion += `- Alquileres devengados anualmente: ${afipData[row].alquileres}<br>`;
    comparacion += `- Precio unitario máximo para la venta de cosas muebles: ${afipData[row].precio}<br>`;

    comparacion += `<br>- Tu Ingresos declarados: $${ingresos}<br>`;
    comparacion += `- Tu Superficie declarada: ${superficie ? superficie : ''}<br>`;
    comparacion += `- Tu Energía eléctrica declarada: ${energia ? energia : ''}<br>`;
    comparacion += `- Tus Alquileres declarados: $${alquileres ? alquileres : ''}<br>`;
    comparacion += `- Tu Precio unitario máximo declarado: $${precio ? precio : ''}<br>`;

    return comparacion;
}

export { calcularCategoria }