function calcularSueldoNeto() {
    let sueldoBruto = parseFloat(document.getElementById('sueldo-bruto').value);
    let aporteSindicatoPorcentaje = parseFloat(document.getElementById('aporte-sindicato').value);
    let advertencia = document.getElementById('advertencia');

    // Si no se ingresa un valor para el sindicato, tomarlo como 0%
    if (isNaN(aporteSindicatoPorcentaje)) {
        aporteSindicatoPorcentaje = 0;
    }

    if (isNaN(sueldoBruto)) {
        alert('Por favor, ingresa un valor válido para el sueldo bruto.');
        return;
    }

    if (sueldoBruto > 1800000) {
        advertencia.style.display = 'block';
    } else {
        advertencia.style.display = 'none';
    }

    let aporteJubilacion = sueldoBruto * 0.11;
    let aportePami = sueldoBruto * 0.03;
    let aporteObraSocial = sueldoBruto * 0.03;
    let aporteSindicato = sueldoBruto * (aporteSindicatoPorcentaje / 100);

    let sueldoNeto = sueldoBruto - (aporteJubilacion + aportePami + aporteObraSocial + aporteSindicato);

    function formatNumber(num) {
        return num % 1 === 0 ? num.toString() : num.toFixed(2);
    }

    document.getElementById('res-sueldo-bruto').textContent = formatNumber(sueldoBruto);
    document.getElementById('res-jubilacion').textContent = formatNumber(aporteJubilacion);
    document.getElementById('res-pami').textContent = formatNumber(aportePami);
    document.getElementById('res-obra-social').textContent = formatNumber(aporteObraSocial);
    document.getElementById('res-sindicato').textContent = formatNumber(aporteSindicato);
    document.getElementById('res-sueldo-neto').textContent = formatNumber(sueldoNeto);

    document.getElementById('resultado').style.display = 'block';
}

export { calcularSueldoNeto }