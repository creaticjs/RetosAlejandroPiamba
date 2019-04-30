function mcd() {
    var a = parseInt(document.getElementById("n1").value);
    var b = parseInt(document.getElementById("n2").value);
    let aux;

    while(b != 0)
    {
      aux = b;

        b = a % b;

        a = aux;
    }
    document.getElementById("resultado").innerHTML = a + "";
    console.log(a);
    return a;
    
  }