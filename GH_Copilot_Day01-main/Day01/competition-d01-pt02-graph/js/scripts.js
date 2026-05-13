document.addEventListener('DOMContentLoaded', function() {
    fetch('https://www.freetestapi.com/api/v1/animals')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#animalTable tbody');
            let animals = data.slice(0, 10); // Limit to the first 10 rows
            let sortAscending = true;

            function renderTable(data) {
                tableBody.innerHTML = '';
                data.forEach(animal => {
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    const speciesCell = document.createElement('td');
                    const habitatCell = document.createElement('td');

                    nameCell.textContent = animal.name;
                    speciesCell.textContent = animal.species;
                    habitatCell.textContent = Math.floor(Math.random() * 90) + 10; // Random number between 10 and 99

                    row.appendChild(nameCell);
                    row.appendChild(speciesCell);
                    row.appendChild(habitatCell);
                    tableBody.appendChild(row);
                });
            }

            renderTable(animals);

            const nameHeader = document.querySelector('#animalTable th:nth-child(1)');
            const arrow = document.createElement('span');
            arrow.textContent = ' ▲';
            nameHeader.appendChild(arrow);

            nameHeader.addEventListener('click', function() {
                sortAscending = !sortAscending;
                animals.sort((a, b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
                arrow.textContent = sortAscending ? ' ▲' : ' ▼';
                renderTable(animals);
            });
        })
        .catch(error => console.error('Error fetching animal data:', error));
});