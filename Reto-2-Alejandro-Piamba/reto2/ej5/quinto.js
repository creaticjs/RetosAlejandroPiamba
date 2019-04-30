function area(){
    //console.log(event.target)
    
    
    var la = parseFloat(document.getElementById("ladoa").value); 
    var lb = parseFloat (document.getElementById("ladob").value);
    var lc = parseFloat(document.getElementById("ladoc").value);

    var p = (la+lb+lc)/2;
    document.getElementById("resultado").innerHTML = (Math.sqrt((p*(p-la)*(p-lb)*(p-lc))));
    

}

