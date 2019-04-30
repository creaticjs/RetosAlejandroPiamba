function salario(){
    var vhl = document.getElementById("hl").value;
    var htr = document.getElementById("ht").value;
    
    var salario=0;
  
    if (htr<38) {
        salario=htr*vhl;    
    }else if(htr>=38){
        salario= (htr * vhl)+((vhl*(1/2))*htr);
    }

      
    if (salario > 50000) {
        salario = salario - (salario*(10/100));      
    }
  
    document.getElementById("rst").innerHTML = "El salario bruto es: "+salario;
    
  }