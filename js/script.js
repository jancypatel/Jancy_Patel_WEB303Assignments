$(document).ready(function() {
  let characters = [];

  // Retrieve data from JSON file
  $.ajax({
    method: 'GET',
    url: 'data.json',
    success: function(data) {
        characters = data;
        createTable(characters);
    },
    error: function(xhr, textStatus, errorThrown) {
        alert("Error: Could not retrieve data from JSON file");
    }
  });

  // Create table and display characters
  function createTable(characters) {
    let tableBody = $('#tableBody');

    // Add rows to table
    for (let i = 0; i < characters.length; i++) {
        let row = `<tr>
                    <td>${characters[i].firstName}</td>
                    <td>${characters[i].LastName}</td>
                    <td>${characters[i].jutsuType}</td>
                    <td>${characters[i].ChakraStyle}</td>
                    <td>${characters[i].bestAttack}</td>
                </tr>`;
        tableBody.append(row);
    }

    // Event listener for sorting
    $('th').click(function() {
        let sortIndex = $(this).index();
        let sortAscending = $(this).attr('data-order') === 'asc';

        // Define the sorting function
        function sortData(a, b) {
            let valueA = a[Object.keys(a)[sortIndex]].toUpperCase();
            let valueB = b[Object.keys(b)[sortIndex]].toUpperCase();
            if (sortAscending) {
                return (valueA < valueB) ? -1 : (valueA > valueB) ? 1 : 0;
            } else {
                return (valueA > valueB) ? -1 : (valueA < valueB) ? 1 : 0;
            }
        }

        // Sort the data
        characters.sort(sortData);

        // Display the sorted data
        tableBody.empty();
        for (let i = 0; i < characters.length; i++) {
            let row = `<tr>
                        <td>${characters[i].firstName}</td>
                        <td>${characters[i].LastName}</td>
                        <td>${characters[i].jutsuType}</td>
                        <td>${characters[i].ChakraStyle}</td>
                        <td>${characters[i].bestAttack}</td>
                    </tr>`;
            tableBody.append(row);
        }

        // Update the order attribute of the clicked header
        $('th').removeAttr('data-order');
        if (sortAscending) {
            $(this).attr('data-order', 'desc');
            $(this).html($(this).text() + ' &#x25BC;');
        } else {
            $(this).attr('data-order', 'asc');
            $(this).html($(this).text() + ' &#x25B2;');
        }
    });

    // Event listener for search
    $('#search').keyup(function() {
        let searchText = $(this).val().toUpperCase();

        // Filter the data
        let filteredData = [];
        for (let i = 0; i < characters.length; i++) {
            let match = false;
            $.each(characters[i], function(key, value) {
                if (value.toUpperCase().indexOf(searchText) !== -1) {
                    match = true;
                }
            });
            if (match) {
                filteredData.push(characters[i]);
            }
        }

        // Display the filtered data
        tableBody.empty();
        for (let i = 0; i < filteredData.length; i++) {
            let row = `<tr>
                        <td>${filteredData[i].firstName}</td>
                        <td>${filteredData[i].LastName}</td>
                        <td>${filteredData[i].jutsuType}</td>
                        <td>${filteredData[i].ChakraStyle}</td>
                        <td>${filteredData[i].bestAttack}</td>
                    </tr>`;
            tableBody.append(row);
        }
    });

    // Event listener for filter buttons
    $('#filterButtons button').click(function() {
        let buttonText = $(this).text().toLowerCase();

        // Filter the data
        let filteredData = [];
        for (let i = 0; i < characters.length; i++) {
            if (characters[i].show.toLowerCase() === buttonText) {
                filteredData.push(characters[i]);
            }
        }

        // Display the filtered data
        tableBody.empty();
        for (let i = 0; i < filteredData.length; i++) {
            let row = `<tr>
                        <td>${filteredData[i].firstName}</td>
                        <td>${filteredData[i].LastName}</td>
                        <td>${filteredData[i].jutsuType}</td>
                        <td>${filteredData[i].ChakraStyle}</td>
                        <td>${filteredData[i].bestAttack}</td>
                    </tr>`;
            tableBody.append(row);
        }
    });

    // Default sort order
    $('th:first').click();
  }

});