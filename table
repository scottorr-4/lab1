function make_table(a, b) {
    var table = document.createElement('table');

    // Create a header row
    var headerRow = document.createElement("tr");

    // Add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    // Add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    // Add the row to the table
    table.appendChild(headerRow);

    // Loop to add a new row for each city
    for (var i = 0; i < a.length; i++) {
        var tr = document.createElement("tr");

        var cityCell = document.createElement("td");
        cityCell.innerHTML = a[i];
        tr.appendChild(cityCell);

        var popCell = document.createElement("td");
        popCell.innerHTML = b[i];
        tr.appendChild(popCell);

        table.appendChild(tr);
    }

    return table;
}

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany'];
var populations = ['59920', '652500', '176650', '56470'];

var myTable = make_table(cities, populations);

// Add the table to the div in index.html
var myDiv = document.getElementById("mydiv");
myDiv.appendChild(myTable);
