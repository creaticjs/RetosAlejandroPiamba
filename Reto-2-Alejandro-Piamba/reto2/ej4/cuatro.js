function hip(){
    //console.log(event.target)
    
    
    var la = document.getElementById("ladoa").value;
    var lb = document.getElementById("ladob").value;
    
    
    document.getElementById("resultado").innerHTML = (Math.sqrt((Math.pow(la,2))+(Math.pow(lb,2))));
    //puntuacion();

}

function getResultado() {
    return(document.getElementById('resultado').innerHTML);
}
