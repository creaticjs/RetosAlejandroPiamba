function cuadradoMagico() {
   
    for (t = 0; ; t++) {
       
        var n = prompt("Digite un numero impar mayor o igual a 3 ");
        if (n % 2 != 0 && n > 2) break;
        else alert("No se puede realizar el cuadrado magico");
    }
    var ultimo = n * n;
    console.log(ultimo+"l");
    var a = [];

    for (m = 0; m < n; m++)
        //console.log(m);
        a[m] = [];


    var i = 0;
    var j = Math.floor(n / 2);;

    for (var c = 1; c <= ultimo; c++) {
        if (i < 0) i = n - (-i);
        if (i >= n) i = i - n;
        if (j < 0) j = n - (-j);
        if (j >= n) j = j - n;

        a[i][j] = c;

        if (c % n == 0) {
            i++;
        }
        else {
            i--;
            j++;
        }

    }
    var muestra = document.getElementById("muestra");
    var crearTabla = document.createElement("table");
    var cuerpo = document.createElement("tbody");
    //document.write("<table border='2'>");
    for (k = 0; k < n; k++) {
        //document.write("<tr>");
        var fila = document.createElement("tr");
        for (l = 0; l < n; l++) {
            //document.write("<td width='60' height='60'>" + a[k][l] + "</td>");
            var cell = document.createElement("td");
            var contenido = document.createTextNode(a[k][l]);
            cell.appendChild(contenido);
            fila.appendChild(cell);
        }
        //document.write("</tr>");
        cuerpo.appendChild(fila);
    }
    //document.write("</table>");
    crearTabla.appendChild(cuerpo);
    muestra.appendChild(crearTabla);


}


