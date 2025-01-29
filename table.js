document.addEventListener("DOMContentLoaded", function() {
function make_table (a, b) { 
    var table = document.createElement('table');


    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" column
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add the "Population" column
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cities.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cities[i];
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = population[i];
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    return table;
}

var cities = ['Corvallis', 'Portland', 'Eugene', 'Albany']
var pops = ['59920', '652500', '176650', '56470']


make_table(cities, pops)


    //add the table to the div in index.html
    var myDiv =  document.getElementById("mydiv");
    myDiv.appendChild(make_table(cities, pops));
});

