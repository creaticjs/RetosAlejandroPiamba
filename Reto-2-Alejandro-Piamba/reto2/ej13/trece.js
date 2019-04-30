function lineal(){
    var coa = document.getElementById("a").value;var cob = document.getElementById("b").value;
    var coc = document.getElementById("c").value;var cod = document.getElementById("d").value;
    var coe = document.getElementById("e").value;var cof = document.getElementById("f").value;

    var x = ((coc*coe)-(cob*cof))/((coa*coe)-(cob*cod));
    var y = ((coa*cof)-(coc*cod))/((coa*coe)-(cob*cod));

    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;

}