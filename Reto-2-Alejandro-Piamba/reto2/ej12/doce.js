function calcularEdad(fecha) {
    
    var fecha = document.getElementById("fecha").value;
    console.log(fecha);
    var valor = fecha.split("/");
    var dia = valor[0];
    console.log(dia);
    var mes = valor[1];
    console.log(mes);
    var anio = valor[2];
    console.log(anio);

    var fecha_hoy = new Date();
    console.log(fecha_hoy);
    var anio_Actual = fecha_hoy.getYear();
    console.log(anio_Actual);
    var mes_Actual = fecha_hoy.getMonth() + 1;
    console.log(mes_Actual);
    var dia_Actual = fecha_hoy.getDate();
    console.log(dia_Actual);

    var edad = (anio_Actual + 1900) - anio;
    console.log(edad);

    if (mes_Actual < mes) {
        edad--;
    }
    if ((mes == mes_Actual) && (dia_Actual < dia)) {
        edad--;
    }
    
    var meses = 0;

    if (mes_Actual > mes && dia > dia_Actual)
        meses = mes_Actual - mes - 1;
    else if (mes_Actual > mes)
        meses = mes_Actual - mes
    if (mes_Actual < mes && dia < dia_Actual)
        meses = 12 - (mes - mes_Actual);
    else if (mes_Actual < mes)
        meses = 12 - (mes - mes_Actual + 1);
    if (mes_Actual == mes && dia > dia_Actual)
        meses = 11;

    var dias = 0;
    if (dia_Actual > dia)
        dias = dia_Actual - dia;
    if (dia_Actual < dia) {
        ultimoDiaMes = new Date(anio_Actual, mes_Actual - 1, 0);
        dias = ultimoDiaMes.getDate() - (dia - dia_Actual);
    }

    try {
        if(mes.length>12){
            alert("error el mes no debe ser mayor a 12");
        }else if(dia>31){
            alert("error los dias no pueden ser mayores a 31");
        }else if(valor[2].length > 4){
            alert("El año no puede contener mas de  4 digitos");
        }else{
            document.getElementById("nac").innerHTML = edad + " años, " + meses + " meses y " + dias + " días";     
        }
        
    } catch (error) {
        console.log(error+"error");
        
    }

   
}