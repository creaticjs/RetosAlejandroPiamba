function dias(mes,año){
    var mes = document.getElementById("m").value;
    var año = document.getElementById("a").value;
    x =  new Date(año, mes, 0).getDate();
    document.getElementById("r").innerHTML = x;
}



