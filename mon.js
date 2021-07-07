//////////create textbox/////////
let div = document.getElementById("main");
let x = document.createElement("input");
x.setAttribute("type", "text");
x.setAttribute("id", 'txt');
document.getElementById("table").appendChild(x);

///////create button/////////
let btn = document.createElement("button");
btn.setAttribute("id", "btn");
btn.innerHTML = "Click me";
document.getElementById("table").appendChild(btn);

///////create select optio tag/////////
var dd = new Date();
var monthArray = new Array();
monthArray[0] = "january";
monthArray[1] = "February";
monthArray[2] = "March";
monthArray[3] = "April";
monthArray[4] = "May";
monthArray[5] = "June";
monthArray[6] = "July";
monthArray[7] = "August";
monthArray[8] = "September";
monthArray[9] = "October";
monthArray[10] = "November";
monthArray[11] = "December";
var sel = document.createElement("select");
sel.id = "month";
sel.name = "month";
for(m = 0; m <= 11; m++) {
var optn = document.createElement("option");
optn.text = monthArray[m];
optn.value = (m);
sel.appendChild(optn);
}
document.getElementById("col").appendChild(sel);
///////////year//////////
var sal = document.createElement("select");
sal.id = "year";
sal.name = "year";
for(y = 2000; y <= 2025; y++) {
  var optn = document.createElement("option");
  optn.text = y;
  optn.value = y;
  sal.appendChild(optn);
  }
  document.getElementById("col").appendChild(sal);
  let selectmonth = document.getElementById("month");
  let selectyear = document.getElementById("year");
////////button click////////////
btn.addEventListener('click', show);
let headers = ["Mon","Tus","Wed","Thus","Fri","Sat","sun"];
function show(){
    let table1 = document.createElement("table");
    table1.setAttribute("id", "teb");
    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textnode = document.createTextNode(headerText);
        header.appendChild(textnode);
        headerRow.appendChild(header);
    });
    table1.appendChild(headerRow);
    headerRow = table1.insertRow(-1);
    //let year = dt.getFullYear();
    //let mon = dt.getMonth();
    let year = selectyear.value;
    let mon = selectmonth.value;
    let d = new Date(year, mon); 
    for (let i = 0; i < getDay(d); i++) {
        var x = document.createElement("td");
        headerRow.appendChild(x);
        table1.appendChild(headerRow);
      }
      while (d.getMonth() == mon) {
        var x = document.createElement("td");
        //x.setAttribute("onclick", 'document.getElementById("txt").value = this.textContent;');
        x.setAttribute("onclick", 'document.getElementById("txt").value = new Date(selectyear.value,selectmonth.value,this.textContent);');
        var t = document.createTextNode(d.getDate());
        x.appendChild(t);
        headerRow.appendChild(x);
        table1.appendChild(headerRow);
        if (getDay(d) % 7 == 6) { // sunday, last day of week - newline
            headerRow = table1.insertRow(-1);
        }
        d.setDate(d.getDate() + 1);
      }
      if (getDay(d) != 0) {
        for (let i = getDay(d); i < 7; i++) {
            var x = document.createElement("td");
            headerRow.appendChild(x);
            table1.appendChild(headerRow);
        }
      }
      function getDay(date) { // get day number from 0 (monday) to 6 (sunday)
        let day = date.getDay();
        if (day == 0) day = 7; // make Sunday (0) the last day
        return day - 1;
      }
    document.getElementById("cal").appendChild(table1);
}
var dt = new Date();
var month = dt. getMonth() + 1;
var year = dt. getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var daysInMonth = new Date(year, month, 0). getDate();
document.getElementById("demo").innerHTML = "Javascript Calendar";