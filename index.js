const ctx = 

        cor = 2
        var g1 = {
            type: "bar",
            data: {
                labels : ['red', 'blue', 'yellow'],
                datasets: [{
                    label: '# of votes',
                    data: [cor +1, cor +2, cor+3],
                    borderWidth: 0.5
                }]
            },
            options:{
                scales:{
                    y:{
                        beginAtZero: true
                    }
                }
            }
        }
    var graf = new Chart(
        document.getElementById('chart1'),
        g1
    )

    
