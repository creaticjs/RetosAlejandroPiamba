function armonica() {
    
    var numero = parseFloat(document.getElementById("numero").value);

    armonica=0;
    while(numero>0){
        const uno =  1;
        armonica += parseFloat((uno) / (numero));
        numero --;
        console.log(armonica);
    }
    document.getElementById("resultado").innerHTML = armonica;
}