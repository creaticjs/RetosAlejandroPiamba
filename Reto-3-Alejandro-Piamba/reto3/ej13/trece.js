function serieD() {
    
    var numero = parseFloat(document.getElementById("numero").value);

    serie=0;
    while(numero>0){
        var dosAN = Math.pow(2,numero);
        console.log(dosAN+" ---2 a la n potencia ");
        serie += parseFloat(((numero)/ (dosAN)));
        numero --;
        console.log(serie);
    }
    document.getElementById("resultado").innerHTML = parseFloat(serie);
}
