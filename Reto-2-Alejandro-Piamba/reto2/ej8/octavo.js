//function convers() {
var conversion = {
  'cero': 0,'uno': 1,'dos': 2,'tres': 3,'cuatro': 4,'cinco': 5,'seis': 6,
  'siete': 7,'ocho': 8,'nueve': 9,'diez': 10,'once': 11,'doce': 12,'trece': 13,
  'catorce': 14,'quince': 15,'dieciseis': 16,'diecisiete': 17,'dieciocho': 18,
  'diecinueve': 19,'veinte': 20,'treinta': 30,'cuarenta': 40,'cincuenta': 50,
  'sesenta': 60,'setenta': 70,'ochenta': 80,'noventa': 90, 'cien': 100,
  'doscientos': 200,'trescientos': 300, 'cuatroscientos':400,'quinientos':500,  
  'seiscientos':600,'setescientos':700,'ochoscientos':800,'novescientos':900,
  'mil':1000,'ciento':100,'veinti':20,'dieci':10,
};

var Magnitud = {
  'mil':     1000,
  
};

var a, n, g,rs;
function texaAnum(s) {

  
  var s = document.getElementById("num").value;
  console.log(s);
    a = s.toString().split(/[\s-]+/);
    n = 0;g = 0;
    a.forEach(feach);
    rs = n + g;
    document.getElementById("r").innerHTML = rs;
    console.log(rs);
}

function feach(w) {
    var x = conversion[w];
    console.log(x);
    if (x != null) {
        g = g + x;
    }
    else if (w == "cien") {
        g = g * 100;
    }
    else {
        x = Magnitud[w];
        if (x != null) {
            n = n + g * x
            g = 0;
        }
        else { 
            alert("Error: "+w); 
        }
    }

    
}


//}