function mediaN() {
    var numTerminos = document.getElementById("numTerminos").value;
    var arreglo = [];
    for (var i = 0; i < numTerminos; i++) {
        arreglo[i] = prompt("Ingrese el numero: " + parseInt(i + 1));
    }
    console.log(arreglo);
    var max = arreglo[0];
    var min = arreglo[0];
    var media = 0
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > max) {
            max = arreglo[i];
        }
        if (arreglo[i] < min) {
            min = arreglo[i];
        }
        media += parseInt(arreglo[i]);
    }
    media /= arreglo.length;
    document.getElementById("media").innerHTML = "Numeros digitados: " + arreglo + "<br/>La media es: " 
    + media + "<br/>El mayor es: " + max + "<br/>El  menor es: " + min;
}
