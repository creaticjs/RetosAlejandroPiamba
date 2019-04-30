function hora(vh){


    var vh = document.getElementById("hora").value;
    if(vh.length != 5){
        alert("Debe ingresar exactamente 5 caracteres");
    }
    var vh = vh.split(":");
    var ampm = 'AM';

    

    if (vh[0] >= 12) {
        ampm = 'PM';
    }

    if (vh[0] > 12) {
        vh[0] = vh[0] - 12;
    }

    cadena = vh[0] + ':' + vh[1] + ':' + vh[2] + ' ' + ampm;
    document.getElementById("resultado").innerHTML = vh;
    return cadena;
    
}


