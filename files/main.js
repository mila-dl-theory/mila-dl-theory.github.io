
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1c-H_V4AnESrTtI-5s5WzqS07DZ56gNDJMBpciA1dlFM/edit?usp=sharing';
  
  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }
 
function showInfo(data, tabletop) {
data.forEach(function(data) {
    Name2.innerHTML = data.Name2;
    Topic2.innerHTML = data.Topic2;
    Resources2.innerHTML = data.Resources2;

    Name3.innerHTML = data.Name3;
    Topic3.innerHTML = data.Topic3;
    Resources3.innerHTML = data.Resources3;

 });
}
  window.addEventListener('DOMContentLoaded', init)






