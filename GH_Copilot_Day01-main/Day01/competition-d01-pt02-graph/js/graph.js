document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.freetestapi.com/api/v1/animals')
        .then(response => response.json())
        .then(data => {
            const animals = data.slice(0, 10); // Limit to the first 10 rows
            const labels = animals.map(animal => animal.name);
            const heights = animals.map(() => Math.floor(Math.random() * 90) + 10); // Random number between 10 and 99

            const ctx = document.getElementById('animalChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Height',
                        data: heights,
                        backgroundColor: 'rgba(31, 58, 147, 0.6)', // Dark blue with opacity
                        borderColor: 'rgba(31, 58, 147, 1)', // Dark blue
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Spotted' // Label for the y-axis
                            }
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching animal data:', error));
});