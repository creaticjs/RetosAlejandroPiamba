function verificar(){
    var num= document.getElementById("n").value;
    if(num == 0){
        alert("El número es igual a cero");
    }else if(num>0){
        alert("El número es positivo");
    }else{
        alert("El número es negativo");
    }
}