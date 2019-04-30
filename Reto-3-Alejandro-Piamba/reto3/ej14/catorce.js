function figura() {

    var numero = parseFloat(document.getElementById("numero").value);
    var muestra = document.getElementById("muestra");
    var crearTabla = document.createElement("table");
    var cuerpo = document.createElement("tbody");
    for (i = 1; i <= numero; i++) {
        var fila = document.createElement("tr");
        for (j = 1; j <=i; j++) {
            //console.log("*")
            //document.getElementById("resultado").innerHTML = "*";
            var cell = document.createElement("td");
            var contenido = document.createTextNode("*");
            cell.appendChild(contenido);
            fila.appendChild(cell);
            //document.write("*");
        }
            //document.write("<br />"); 
            cuerpo.appendChild(fila);
    }
    crearTabla.appendChild(cuerpo);
    muestra.appendChild(crearTabla);
 
}