
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c-H_V4AnESrTtI-5s5WzqS07DZ56gNDJMBpciA1dlFM/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
 
function showInfo(data, tabletop) {
data.forEach(function(data) {

    var table1 = document.getElementById("schedule_table");
    var n_current_rows = table1.rows.length
    var i;
    for (i = 0; i < data.count_table1; i++) {
        var Date = "Date" + (i+2)
        var Leader = "Leader" + (i+2)
        var Topic = "Topic" + (i+2)
        var Resources = "Resources" + (i+2)

        var row0 = table1.insertRow(i+n_current_rows);
        var cell0 = row0.insertCell(0);
        var cell1 = row0.insertCell(1);
        var cell2 = row0.insertCell(2);
        var cell3 = row0.insertCell(3);
        cell0.innerHTML = data[Date];
        cell1.innerHTML = data[Leader];
        cell2.innerHTML = data[Topic];
        if (data[Resources].length>10){
            cell3.innerHTML = "<span><a href='resources.html?date="+ data[Date] + "'  target='_blank'>Link</a></span>";
        }else{
          cell3.innerHTML = "N/A";
        }
    }

    var table2 = document.getElementById("topics_table");
    var i;
    for (i = 0; i < data.count_table2; i++) {
        var Name = "Name" + (i+2)
        var Topics_I_know = "Topics_I_know" + (i+2)
        var Topics_I_like = "Topics_I_like" + (i+2)

        var row0 = table2.insertRow(i+2);
        var cell0 = row0.insertCell(0);
        var cell1 = row0.insertCell(1);
        var cell2 = row0.insertCell(2);
        cell0.innerHTML = data[Name];
        cell1.innerHTML = data[Topics_I_know];
        cell2.innerHTML = data[Topics_I_like];
    }

    // document.getElementById("demo").innerHTML = "test";

 });
}
  window.addEventListener('DOMContentLoaded', init)
