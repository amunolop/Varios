document.addEventListener('DOMContentLoaded', function() {
    const fetchData = async (): Promise<void> => {
        try {
            const response = await fetch('https://www.freetestapi.com/api/v1/animals');
            const data = await response.json();
            const tableBody = document.querySelector('#animalTable tbody');

            if (tableBody) {
                data.forEach((animal: any) => {
                    const row = document.createElement('tr');
                    const nameCell = document.createElement('td');
                    const speciesCell = document.createElement('td');
                    const familyCell = document.createElement('td');

                    nameCell.textContent = animal.name;
                    speciesCell.textContent = animal.species;
                    familyCell.textContent = animal.family;

                    row.appendChild(nameCell);
                    row.appendChild(speciesCell);
                    row.appendChild(familyCell);
                    tableBody.appendChild(row); // Append the row to the table body
                });
            } else {
                console.error('Table body not found');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
});