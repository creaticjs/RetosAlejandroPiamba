function wallis(){
   
    var numTerminos = parseFloat(document.getElementById("numTerminos").value);
    var pi=1;
    for (let i = 1; i < numTerminos; i++) {
        var dosN = 2 * (i);
        var fraccionUno = parseFloat((dosN) / ((dosN) - 1));
        var fraccionDos = parseFloat((dosN) / ((dosN) + 1));
        pi *= parseFloat(fraccionUno*fraccionDos);
    }
    document.getElementById("resultado").innerHTML =pi*2;
    

}

