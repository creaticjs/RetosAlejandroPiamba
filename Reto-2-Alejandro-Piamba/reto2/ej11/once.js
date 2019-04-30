function dados() {
    var digitoa = document.getElementById("diga").value;var digitob = document.getElementById("digb").value;
    var digitoc = document.getElementById("digc").value;var digitod = document.getElementById("digd").value;
    var enteron = digitoa + digitob + digitoc + digitod;
    var c = 100;
    var aux = parseInt(enteron) / c;  //divide el en entero en dos
    document.getElementById("rn").innerHTML = (Math.round(aux, 2)) * 100; // redondea los dos ultimos digitos
  }