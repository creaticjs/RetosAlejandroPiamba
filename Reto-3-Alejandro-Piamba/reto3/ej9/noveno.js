function Fibonacci() {
    var num = (document.getElementById("numero").value);
    var a = 0, b = 1, suma=0;cont=1;

    while(suma<num){
      suma = a+b;
      //console.log(suma);
      a=b;
      //console.log(a);
      b=suma;
      console.log(b);
      cont = cont+1;
    }

    
  
    document.getElementById("resultado").innerHTML = "Faltan "+cont+" meses para que hallan "+num+" parejas de conejos aprox.";
  }