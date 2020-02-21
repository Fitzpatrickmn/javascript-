// Variable Declaration
let tbody = d3.select("tbody");

// from data.js

var tableData = data;

// Function Build Table
function BuildTable(data){
    // clear existing data
    tbody.html("");
    // Loop through 'data' (forEach - executes  provided function once for each array element)
    data.forEach((dataRow) => {
        // Append Table Row 'tr' to the Table Body 'tbody'
        // 
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    })
}

// function when the buttone is clicked 
function handleClick(){
    // prevent from refreshing
    d3.event.preventDefault();
// Select HTML Input Element & Input Element
    let date = d3.select("#datetime").property("value");
    let filterData = tableData;

// Check if a Date was Entered
    if (date) {
    // filter out datetime needed
        filterData = filterData.filter((row) => row.datetime === date);
    }
    BuildTable(filterData);
}

// attach an Event to the Handler Function
d3.selectAll("#filter-btn").on("click", handleClick);
BuildTable(tableData);