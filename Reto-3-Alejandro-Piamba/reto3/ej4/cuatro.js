function domingoP() {

    var anio = parseInt(document.getElementById("anio").value);
    var la = (anio % 19);
    console.log(la + "A")
    var lb = (anio % 4);
    console.log(lb + "B")
    var lc = (anio % 7);
    console.log(lc + "C")
    var ld = (19 * la + 24) % 30;
    console.log(ld + "D")
    var le = (2 * lb + 4 * lc + 6 * ld + 5) % 7;
    console.log(le + "E")
    var n = (22 + ld + le);
    console.log(n + "N")

    var resultado = "";
    if (n > 31) {
        n -= 31;
        resultado = "El "+n+" de abril";

    } else {
        resultado = "El "+n+" de marzo";
        

    }
    document.getElementById("resultado").innerHTML = resultado;

    //document.getElementById("resultado").innerHTML = n;


}
