///////create textbox///////////
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

btn.addEventListener('click', show);
let headers = ["Sun","Mon","Tus","Wed","Thus","Fri","Set"];
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
    var k =1;
    for (var i = 1; i < headers.length; i++) {
        headerRow = table1.insertRow(-1);
        for (var j = 1; j <= 7; j++) {
            if(k<=31){
                //headerRow = table1.insertRow(-1);
                var x = document.createElement("td");
                x.setAttribute("onclick", 'document.getElementById("txt").value = this.textContent;');
                var t = document.createTextNode(k);
                x.appendChild(t);
                headerRow.appendChild(x);
                table1.appendChild(headerRow);
                k++;
            }
        }
    }
    document.getElementById("table").appendChild(table1);
}
var dt = new Date();
var month = dt. getMonth() + 1;
var year = dt. getFullYear();
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var daysInMonth = new Date(year, month, 0). getDate();
document.getElementById("demo").innerHTML = months[dt.getMonth()]+" "+"2021";


