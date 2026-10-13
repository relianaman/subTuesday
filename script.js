
let a = parseInt(prompt("Enter the table number: "));

let table = "<tr>";

for (let i = 1; i <= a; i++) {
    table += "<th>Table of " + i + "</th>";
}

table += "</tr>";

for (let j = 1; j <= 10; j++) {
    table += "<tr>";

    for (let i = 1; i <= a; i++) {
        table += "<td style='animation-delay:" + (i * 0.04 + j * 0.03) + "s'>"
              + i + " × " + j + " = " + (i * j)
              + "</td>";
    }

    table += "</tr>";
}

if (isNaN(a) || a < 1) {
    document.getElementById("result").innerHTML =
        "<tr><td>Please enter a valid positive number.</td></tr>";
} else {
    document.getElementById("result").innerHTML = table;
}
