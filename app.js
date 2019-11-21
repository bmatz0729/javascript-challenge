// from data.js
var tableData = data;

// YOUR CODE HERE!
var table_body = d3.select("tbody");
var table_row = table_body.append("tr");

//CREATE TABLE
function TableCreate(tableData){
	table_body.html("");
	
	tableData.forEach(function(load_data){
    
    table_body.append("tr");

    
    Object.entries(load_data).forEach(function([key, value]){
    insert = table_body.append("td").text(value);
    

    })
});

}

function Search(){
	
	var date = d3.select("#datetime").property("value");
	
	if (date){
	var filter_d = tableData.filter((sighting => sighting.datetime === date));
	 }
	 TableCreate(filter_d);
	 }


var lookup = d3.selectAll("#filter-btn").on("click", Search);

TableCreate(tableData);