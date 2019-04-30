function media(event){
    //console.log(event.target)
    
    var media = 4;
    var not1 = document.getElementById("nota1").value;
    var not2 = document.getElementById("nota2").value;
    var not3 = document.getElementById("nota3").value;
    var not4 = document.getElementById("nota4").value;
    
    
    
    document.getElementById("resultado").innerHTML = (parseInt(not1)+parseInt(not2)+parseInt(not3)+parseInt(not4))/media
    puntuacion();

}

function puntuacion(){
    var resultado = getResultado();

    if(resultado>=90 && resultado <=100 ){
        document.getElementById("puntuacion").innerHTML = "A";
    }else if(resultado>=80 && resultado <=89){
        document.getElementById("puntuacion").innerHTML = "B";
    }else if(resultado>=70 && resultado <=79){
        document.getElementById("puntuacion").innerHTML = "C";
    }else if(resultado>=60 && resultado <=69){
        document.getElementById("puntuacion").innerHTML = "D";
    }else if(resultado>=0 && resultado <=59){
        document.getElementById("puntuacion").innerHTML = "E";
    }
}

function getResultado() {
    return(document.getElementById('resultado').innerHTML);
}
