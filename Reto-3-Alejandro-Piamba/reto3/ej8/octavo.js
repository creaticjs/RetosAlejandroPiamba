function euler() {
    var valorX = parseFloat(document.getElementById("num").value);
    var fact = 0,exp = 0,fraccion = 0;
    var arreglo = [];
    for (var i = 2; i < 102; i++) {
        exp = Math.pow(valorX, (i));
        fact = factorial(i);
        fraccion += exp / fact
        console.log(fraccion + 1 + valorX);
        arreglo.push(fraccion + 1 + valorX);
        var ind = arreglo.indexOf(i);
        document.getElementById("resultado").innerHTML =arreglo.join('<br/>');
    }
}

function factorial(n) {
    var numero = 1;
    for (var i = 1; i <= n; i++) {
        numero *= i;
    }
    return numero;
}


