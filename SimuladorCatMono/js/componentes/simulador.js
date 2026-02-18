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
        let montoMayorCategoria = Number(
                afipData[afipData.length-1].ingresos
                        .replace('$','')
                        .replaceAll('.', '')
                        .replace(',', '.')
            );
        if (ingresos > montoMayorCategoria) {
            mensaje = `<span style="display: block; text-align: center;"><b>Debes inscribirte en el Régimen General.</b></span>`;
            row = 99;
        }
        else {
            for (let i=0; i<afipData.length; i++) {
                let monto = Number(
                    afipData[i].ingresos
                            .replace('$','')
                            .replaceAll('.', '')
                            .replace(',', '.')
                );
                console.log(monto);
    
                if (ingresos <= monto) {
                    categoria = `Categoría ${afipData[i].categoria}`;
                    row = i;
                    break;
                }
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