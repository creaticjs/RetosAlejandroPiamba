function salario(event){
    
    var sal = parseFloat(document.getElementById("sal").value);
    if(sal>=0 && sal <=9000 ){
        var sal = sal+(sal*0.2);
        document.getElementById("resultado").innerHTML = sal;
    }else if(sal>=9001 && sal <=15000){
        var sal = sal+(sal*0.1);
        document.getElementById("resultado").innerHTML = sal;
    }else if(sal>=15001 && sal <=20000){
        var sal = sal+(sal*0.05);
        document.getElementById("resultado").innerHTML = sal;
    }else if(sal>20000){
        alert("Su salario se mantiene actual :/");
        document.getElementById("resultado").innerHTML = sal;
    }


}
