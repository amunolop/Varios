document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.freetestapi.com/api/v1/animals')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#animalTable tbody');

            data.forEach(animal => {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const speciesCell = document.createElement('td');
                const habitatCell = document.createElement('td');

                nameCell.textContent = animal.name;
                speciesCell.textContent = animal.species;
                habitatCell.textContent = animal.habitat;

                row.appendChild(nameCell);
                row.appendChild(speciesCell);
                row.appendChild(habitatCell);
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching animal data:', error));
});