function Circulo() {
    var radio = (document.getElementById("radio").value);
    var area = Math.PI * Math.pow(radio, 2);
    var diametro = 2 * radio;
    var circun = Math.PI * diametro;
    document.getElementById("circunc").innerHTML = circun;
    document.getElementById("areac").innerHTML = area;
    document.getElementById("diamc").innerHTML =  diametro;


    circunc
  
  }