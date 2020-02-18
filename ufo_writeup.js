// Append table

var tableData = data; 
var tbody = d3.select("tbody"); 

function autoPopulate(tableData) {
    tableData.forEach((sighting) => {
        var row = tbody.append("tr"); 
        Object.entires(sighting).forEach(([key, value]) => {
            var cell = row.append("td"); 
            cell.text(value); 
        }); 
    }); 
}

// Selection of an item from dropdown menu 
// Listen for events and search through the date/time column to find rows that match user input

var filterType = d3.select("#filter-type"); 
var filterTypeValue = d3.select("#filter-type-value"); 
var button = d3.select("#filter-btn"); 
 
filterType.on("change", function() {
    var filterValue = filterType.property("value");
    d3.select("#filter-type").node().value = '';
    switch (filterValue) {
        case 'datetime':
            placeHolder = '1/11/2011'; 
            break; 
        case 'city':
            placeHolder = 'City'; 
            break;
        case 'state':
            placeHolder = 'State';
            break;
        case 'country':
            placeHolder = 'Country';
            break;
        case 'shape':
            placeHolder = 'Shape';
            break;
        default:
            placeHolder = '';
    }
    d3.select("input").attr("placeholder", placeHolder); 
    d3.select("label")
        .attr("for", filterValue)
        .text(`Enter value for ${filterValue.toUpperCase()}`); 
}); 

//after clickling filter button 
submit.on("click", function(){
    d3.event.preventDefault();
    tbody.html(""); 
    var inputElement = d3.select("#filter-type"); 
    var inputValue = d3.inputElement.property("value"); 

    if (inputValue == '') {
        alert("Please enter a filter value."); 
        document.getElementById("#filter-type").focus(); 
        autoPopulate(tableData); 
    }

    var typeVal = d3.select("label").attr("for"); 

    var filteredData = tableData.filter(sighting => sighting[typeVal] === inputValue.toLowerCase()); 

    if (filteredData.length == 0) {
        alert("No UFO's Found. Please try another filter value.");
        d3.select("#filter-type").node().value = ''; 
        autoPopulate(tableData); 
    }
    console.log(filteredData); 


filteredData.forEach((sighting) => {
    var row = tbody.append("tr"); 
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td"); 
        cell.text(value); 
    }); 
}); 

}) 
