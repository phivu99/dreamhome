var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    height: 50,
    backgroundColor: 'linear-gradient(180deg, rgba(255, 169, 32, 0.2) 0.26%, rgba(255, 169, 32, 0) 100%)',
    data: {
        labels: ['Mar 21', 'Mar 22', 'Mar 23', 'Mar 24', 'Mar 25', 'Mar 26', 'Mar 27', 'Mar 28', 'Mar 29', 'Mar 30', 'Mar 31'],
        datasets: [{
            label: '# of Votes',
            data: [50, 100,15, 150, 25, 50, 100,15, 50, 25,75],
            backgroundColor: [
                'rgba(255, 169, 32, 1)'
                
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)'

            ],
            // background: linear-gradient(180deg, rgba(255, 169, 32, 0.2) 0.26%, rgba(255, 169, 32, 0) 100%),

            borderColor: [
                'rgba(255, 169, 32, 1)',
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            }
        }
    }
});