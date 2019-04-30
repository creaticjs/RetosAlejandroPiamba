function Bisisesto(anio) {

    var anio = document.getElementById("a").value;

    if (anio % 100== 0){
        if (anio % 4 == 0 || anio % 400 == 0) {
            document.getElementById("b").innerHTML = anio+" es bisiesto";
        }else{
            document.getElementById("nb").innerHTML = anio+" no es bisiesto";
        }
    }else if(anio % 4 == 0) {
        document.getElementById("b").innerHTML = anio+" es bisiesto";    
      } else {
        document.getElementById("nb").innerHTML = anio+" no es bisiesto";
      }
 
}