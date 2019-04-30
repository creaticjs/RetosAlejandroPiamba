function fec() {


  var fecha = document.getElementById("fecha").value;
  var x = fecha.split(" ");
  var mes = x[1];

  switch (mes) {
    case "enero":
      x.splice(1, 1, "1");
      x[1] = "1";
      break;
    case "febrero":
      x.splice(1, 1, "2");
      break;
    case "marzo":
      x.splice(1, 1, "3");
      break;
    case "abril":
      x.splice(1, 1, "4");
      break;
    case "mayo":
      x.splice(1, 1, "5");
      break;
    case "junio":
      x.splice(1, 1, "6");
      break;
    case "julio":
      x.splice(1, 1, "7");
      break;
    case "agosto":
      x.splice(1, 1, "8");
      break;
    case "septiembre":
      x.splice(1, 1, "9");
      break;
    case "octubre":
      x.splice(1, 1, "10");
      break;
    case "noviembre":
      x.splice(1, 1, "11");
      break;
    case "diciembre":
      x.splice(1, 1, "12");
      break;
  
  }

  document.getElementById("resultado").innerHTML = x;



}


