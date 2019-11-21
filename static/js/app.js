// from data.js
var tableData = data;

var $tbody = document.querySelector("tbody");


// YOUR CODE HERE!
function LoadTable() {
  
  for (var i = 0; i < tableData.length; i++) {
    

    var ufo = tableData[i];
    var sighting = Object.keys(ufo);
    
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < sighting.length; j++) {
      
      var ufo_sighting = sighting[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufo[ufo_sighting];
    }
  }
}



// Render the table for the first time on page load
LoadTable();