async function calculateCompoundInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const compoundings = parseInt(document.getElementById('compoundings').value);
    const tbody = document.querySelector('#results-table tbody');
    const summaryText = document.getElementById('summary-text');
    const labels = [];
    const values = [];

    // Validación de entradas
    if (isNaN(principal) || principal <= 0 || isNaN(rate) || rate <= 0 || isNaN(years) || years <= 0 || isNaN(compoundings) || compoundings <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    // Limpiar resultados anteriores
    tbody.innerHTML = '';
    summaryText.innerHTML = '';

    // Calcular y mostrar resultados
    const totalMonths = years * 12;
    for (let month = 1; month <= totalMonths; month++) {
        const amount = principal * Math.pow(1 + rate / compoundings, compoundings * (month / 12));
        labels.push(`Mes ${month}`);
        values.push(amount.toFixed(2));

        // Añadir fila a la tabla
        const row = document.createElement('tr');
        row.innerHTML = `<td>${month}</td><td>${amount.toFixed(2)}</td>`;
        tbody.appendChild(row);
    }

    // Mostrar resumen de resultados
    const finalAmount = values[values.length - 1];
    const yearText = years === 1 ? 'año' : 'años';
    summaryText.innerHTML = `En ${years} ${yearText}, su inversión crecerá hasta alcanzar $${finalAmount}. La tabla y el gráfico a continuación muestran cómo evolucionará su capital mes a mes.`;

    // Crear gráfico
    await import("https://cdn.jsdelivr.net/npm/chart.js");
    let divGrafico = document.querySelector('#chart-container');
    divGrafico.style["justify-content"] = 'flex-end';
    let canvas = document.getElementById('interest-chart');
    if (canvas) canvas.remove();
    let ctx = document.createElement('canvas');
    ctx.id = 'interest-chart';
    ctx.getContext('2d');
    divGrafico.append(ctx);
    // const ctx = document.getElementById('interest-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valor final ($)',
                data: values,
                borderColor: '#0056b3',
                backgroundColor: 'rgba(0, 86, 179, 0.2)',
                fill: true,
                tension: 0.1,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#333'
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `$${tooltipItem.raw}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Mes'
                    },
                    ticks: {
                        stepSize: 12, // Mostrar etiquetas cada año
                        callback: function(value) {
                            const year = Math.floor(value / 12);
                            return value % 12 === 0 ? `Año ${year}` : '';
                        },
                        color: '#333'
                    },
                    grid: {
                        color: '#ddd'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Valor final ($)'
                    },
                    ticks: {
                        callback: function(value) {
                            return `$${value}`;
                        },
                        color: '#333'
                    },
                    grid: {
                        color: '#ddd'
                    }
                }
            }
        }
    });
}

export { calculateCompoundInterest }