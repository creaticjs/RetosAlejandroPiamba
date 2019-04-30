function optimo(){
    var num= document.getElementById("bi").value;
    var b1 = 0; var b2 = 0; var b3 = 0; var b4 = 0; var b5 = 0; var b6 = 0;var b7 = 0;  
    var m1 = 0; var m2 = 0; var m3 = 0; var m4 = 0; 
    
    if(num>=100000){
        b7 = Math.floor(num/100000);
        num = num % 100000;
        console.log(b1);
    }
    if(num>=50000){
        b6 = Math.floor(num/50000);
        num = num % 50000;
        console.log(b1);
    }
    if(num>=20000){
        b5 = Math.floor(num/20000);
        num = num % 20000;
        console.log(b1);
    }
    if(num>=10000){
        b4 = Math.floor(num/10000);
        num = num % 10000;
        console.log(b1);
    }


    if(num>=5000){
        b1 = Math.floor(num/5000);
        num = num % 5000;
        console.log(b1);
    }
    if(num>=2000){
        b2 = Math.floor(num/2000);
        num = num % 2000;
    }
    if(num>=1000){
        b3 = Math.floor(num/1000);
        num = num % 1000;
    }
    if(num>=500){
        m1 = Math.floor(num/500);
        num = num % 500;
    }
    if(num>=200){
        m2 = Math.floor(num/200);
        num = num % 200;
    }
    if(num>=100){
        m3 = Math.floor(num/100);
        num = num % 100;
    }
    if(num>=50){
        m4 = Math.floor(num/50);
        num = num % 50;
    }

    document.getElementById("r").innerHTML =
    "cambio en billetes de 100.000 :"  +b7+
    " ,en billetes de 50.000 : "+ b6 +
    " ,en billetes de 20.000 : "+ b5 +
    " ,en billetes de 10.000 : "+ b4 +
     " ,en billetes de 5.000 : "+ b1 +
     " ,en billetes de 2.000 : "+ b2 +
     " ,en billetes de 1.000 : "+ b3 +
     " ,en monedas de 500 : "+m1 + 
     " ,en monedas de 200 : "+ m2+
     " ,en monedas de 100 : "+ m3+
     " ,en monedas de 50 : "+ m4;

}