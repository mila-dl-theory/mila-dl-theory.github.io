
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c-H_V4AnESrTtI-5s5WzqS07DZ56gNDJMBpciA1dlFM/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
 
function showInfo(data, tabletop) {

    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });

data.forEach(function(data) {

    var table1 = document.getElementById("schedule_table");
    var n_current_rows = table1.rows.length
    var i;
    for (i = 0; i < data.count_table1; i++) {
        var Date = "Date" + (i+2)
        var Topic = "Topic" + (i+2)
        var Resources = "Resources" + (i+2)

        if (vars["date"].replace(/%20/g, " ")==data[Date]){
            document.getElementById("date").innerHTML = data[Date];
            document.getElementById("topic").innerHTML = data[Topic];


        var row0 = table1.insertRow(2);
        var cell0 = row0.insertCell(0);
        cell0.innerHTML = data[Resources];
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

    // document.getElementById("date").innerHTML = "test";

 });
}
  window.addEventListener('DOMContentLoaded', init)
