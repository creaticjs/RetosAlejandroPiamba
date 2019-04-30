function primo() {
    var numero = document.getElementById("primo").value;
    
    var primo = true;

    for(i=1;i<numero;i++)
		{
			if(numero/i == Math.round(numero/i) && i!=1 && i!=numero)
			{
        primo=false;
				break;
			};
		};
 
		if(primo)
			document.getElementById("resultado").innerHTML="El numero "+numero+" es primo";
		else
			document.getElementById("resultado").innerHTML="El numero "+numero+" no es primo";
	}
