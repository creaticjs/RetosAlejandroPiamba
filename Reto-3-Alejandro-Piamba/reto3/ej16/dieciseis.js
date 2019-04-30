function nPrimeros(){
    var num = document.getElementById("numeros").value;
    
    var i=1,suma=0;
    while (suma<num) {
        suma += i;
        i +=1;
    }
  
    document.getElementById("resultado").innerHTML = "El numero mas pequeño que excede es: "+suma;
    
  }