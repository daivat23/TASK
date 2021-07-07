
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


//////create table/////////
document.querySelector('button');
document.querySelector('#table');

let headers = ["Sun","Mon","Tus","Wed","Thus","Fri","Set"];
let data = [
    {Sun: '1',Mon: '2',Tus: '3',Wed: '4',Thus: '5',Fri: '6',Set: '7'},
    {Sun: '8',Mon: '9',Tus: '10',Wed: '11',Thus: '12',Fri: '13',Set: '14'},
    {Sun: '15',Mon: '16',Tus: '17',Wed: '18',Thus: '19',Fri: '20',Set: '21'},
    {Sun: '22',Mon: '23',Tus: '24',Wed: '25',Thus: '26',Fri: '27',Set: '28'},
    {Sun: '29',Mon: '30',Tus: '31'}
]
btn.addEventListener("click", () => {
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

    data.forEach(emp => {
        let row = document.createElement("tr");
        Object.values(emp).forEach(text => {
            let cell = document.createElement("td");
            cell.setAttribute("onclick", 'document.getElementById("txt").value = this.textContent;');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        });
        table1.appendChild(row);
    });
    document.getElementById("table").appendChild(table1);
});