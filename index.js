const { Chart } = require("chart.js");
const ctx = document.getElementById('chart1')
new Chart (ctx,{
    type: "bar",
    data: {
        labels : ['red'],
        datasets: [{
            label: 'oi',
            data: [11],
            borderWidth: 1
        }]
    },
    options:{
        scales:{
            y:{
                beginAtZero: true
            }
        }
    }
})