function fuerza(){
    //console.log(event.target)
    
    var gu = 6.67384 * Math.pow(10,-11);
    var mas1 = document.getElementById("masa1").value;
    var mas2 = document.getElementById("masa2").value;
    var distanc = document.getElementById("distancia").value;
    
    document.getElementById("resultado").innerHTML = ((gu * parseFloat(mas1)* parseFloat(mas2))/ (Math.pow(distanc,2))).toExponential(2);
    //puntuacion();

}

function getResultado() {
    return(document.getElementById('resultado').innerHTML);
}
