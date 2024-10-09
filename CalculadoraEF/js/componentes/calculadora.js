function calculateDebt() {
    console.log('entró');
    let income = parseFloat(document.getElementById('income').value);
    let fixedExpenses = parseFloat(document.getElementById('fixedExpenses').value);
    let variableExpenses = parseFloat(document.getElementById('variableExpenses').value);
    let totalDebt = parseFloat(document.getElementById('totalDebt').value) || 0;

    let availableIncome = income - (fixedExpenses + variableExpenses);
    let maxDebtCapacity = availableIncome * 0.30;

    let resultText = "Ingresos disponibles: $" + Math.round(availableIncome) + "<br>";
    resultText += "Capacidad máxima de endeudamiento (30%): $" + Math.round(maxDebtCapacity) + "<br>";
    resultText += "Total de deudas actuales: $" + Math.round(totalDebt) + "<br>";

    let resultElement = document.getElementById('result');
    resultElement.classList.remove('oculto');
    resultElement.classList.add('visible');
    resultElement.innerHTML = resultText;

    if (totalDebt > maxDebtCapacity) {
        resultElement.innerHTML += '<div class="alert">¡Cuidado! Tu nivel de deuda actual excede la capacidad máxima recomendada del 30% de tus ingresos disponibles. Es importante que tomes medidas para reducir tu endeudamiento. Un endeudamiento excesivo puede llelet a dificultades financieras y afectar tu estabilidad económica a largo plazo.</div>';
    } else if (totalDebt > maxDebtCapacity * 0.75) {
        resultElement.innerHTML += '<div class="warning">Atención: Tu nivel de deuda está cerca del límite recomendado. Aunque aún estás dentro del rango, es recomendable que revises tus gastos y consideres opciones para mejorar tu capacidad de ahorro. Mantener un endeudamiento por debajo del 30% de tus ingresos disponibles es una buena práctica para garantizar tu seguridad financiera.</div>';
    } else {
        resultElement.innerHTML += '<div class="success">¡Buen trabajo! Tu nivel de deuda está dentro del rango recomendado. Mantener tus deudas bajo control es esencial para una buena salud financiera. Sigue gestionando tus finanzas de manera responsable y asegúrate de destinar una parte de tus ingresos al ahorro para emergencias y futuros proyectos.</div>';
    }
}
export { calculateDebt }