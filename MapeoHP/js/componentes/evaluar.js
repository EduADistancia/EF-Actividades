import { descargar } from "./captura.js"

function calcular(){
    let etiquetas = document.querySelectorAll('.habilidad');
    let valores = document.querySelectorAll('input[type=radio]:checked');
    let resultados = {}; 
    
    for (let i = 0; i < valores.length; i++){
        let clase = valores[i].className;
        if (clase in resultados) {
            resultados[(valores[i].className)] += Number(valores[i].value);
        } else {
            resultados[(valores[i].className)] = Number(valores[i].value);
        }
    }
    
    let resFinal = [];
    let campos = [];
    etiquetas.forEach(campo => campos.push(campo.textContent));

    for (let c of campos){
        resFinal.push(resultados[c] ? resultados[c] : 0);
    }

    let options = {
        chart: {
            width: "100%",
            height: 700,
            type: 'radar'
        },
        series: [
            {
                data: resFinal
            },
        ],
        yaxis: {
                max: 12,
                stepSize: 3,
        },
        plotOptions: {
            radar: {
                size: 250,
                offsetX: 0,
                offsetY: 0,
                polygons: {
                    strokeColors: '#e8e8e8',
                    strokeWidth: 1,
                    connectorColors: '#e8e8e8',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        xaxis: {
            categories: campos,
            labels: {
                show: true,
                style: {
                        colors: Array.from(campos, (x) => '#153244')
                }
            }
        },
        responsive: [
            {
                breakpoint: 600,
                options: {
                    chart: {
                        height: 350
                    },
                    plotOptions: {
                        radar: {
                            size: 100
                        }
                    },
                }
            }
        ]
    }
        
    cargarContenido(options, resultados);
}

async function cargarContenido(options, resultados) {
    let principal = document.querySelector('.contPpal');
    let docuHTML = await fetch("./resultado.html")
                            .then(respuesta => respuesta.text());
    principal.innerHTML = docuHTML;

    let data = await fetch("./datos/data.json")
                            .then(respuesta => respuesta.json());
    
    let chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    
    let saludo = data["salida"];
    let salida = document.querySelector('#saludo');
    salida.innerHTML = saludo;
    
    let devolucion = data["resultados"];
    let dev = document.querySelector('#salida');
    // let texto_dev = []

    for (let d in resultados) {
        let compara = devolucion;
        for (let c of compara) {
            let escala = Object.keys(c["valor_mensaje"]);
            if (c["item"] == d) {
                for (let e of escala) {
                    if (resultados[d] <= e) {
                        let divItem = document.createElement('div');
                        divItem.className = 'marco';
                        let h3Item = document.createElement('h3');
                        h3Item.textContent = d;
                        let p = document.createElement('p');
                        // p.className = 'marco';
                        p.innerHTML = c["valor_mensaje"][e];
                        // texto_dev.push(c["valor_mensaje"][e]);
                        divItem.append(h3Item, p);
                        dev.append(divItem);
                        break;
                    }
                }
            }
        }
    }

    // texto_dev.forEach(t => {
    //     let p = document.createElement('p');
    //     p.innerHTML = t;
    //     dev.append(p);
    // });
    
    let capturar1 = document.getElementById('descarga');
    capturar1.addEventListener('click', ev => {
        descargar('#captura');
    });

}


export { calcular }