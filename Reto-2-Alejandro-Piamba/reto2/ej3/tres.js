function emc(){
    //console.log(event.target)
    
    var c = 2.997925 * Math.pow(10,10);
    var mas1 = document.getElementById("masa1").value;    
    document.getElementById("resultado").innerHTML = ((parseFloat(mas1))*(Math.pow(c,2))).toExponential(2);
    //puntuacion();

}

function getResultado() {
    return(document.getElementById('resultado').innerHTML);
}
