
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c-H_V4AnESrTtI-5s5WzqS07DZ56gNDJMBpciA1dlFM/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
 
function showInfo(data, tabletop) {
data.forEach(function(data) {

    var table = document.getElementById("topics_table");
    // var row0 = table.insertRow(2);
    // var cell0 = row0.insertCell(0);
    // var cell1 = row0.insertCell(1);
    // var cell2 = row0.insertCell(2);
    // cell0.innerHTML = "NEW CELL0";
    // cell1.innerHTML = "NEW CELL1";
    // cell2.innerHTML = "NEW CELL2";

    var i;
    for (i = 0; i < data.count; i++) {
        var Name = "Name" + (i+2)
        var Topics_I_know = "Topics_I_know" + (i+2)
        var Topics_I_like = "Topics_I_like" + (i+2)

        var row0 = table.insertRow(i+2);
        var cell0 = row0.insertCell(0);
        var cell1 = row0.insertCell(1);
        var cell2 = row0.insertCell(2);
        cell0.innerHTML = data[Name];
        cell1.innerHTML = data[Topics_I_know];
        cell2.innerHTML = data[Topics_I_like];
    }

    document.getElementById("demo").innerHTML = Name;

 });
}
  window.addEventListener('DOMContentLoaded', init)


// <script>
// function add_rows_as_needed() {
//   // alert(<h3 id="body9"></h>)
//   // var table = document.getElementById("topics");
//   // var row = table.insertRow(0);
//   // var cell1 = row.insertCell(0);
//   // var cell2 = row.insertCell(1);
//   // cell1.innerHTML = "NEW CELL1";
//   // cell2.innerHTML = "NEW CELL2";
// }
// </script>




