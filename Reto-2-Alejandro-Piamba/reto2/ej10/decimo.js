function romanos(num) {
    var num = document.getElementById("a").value;
    var eq = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
        roman = '',
        i;
    for ( i in eq ) {
      while ( num >= eq[i] ) {
        roman += i;
        console.log(roman);
        num -= eq[i];
        console.log(num);
      }
    }
    document.getElementById("r").innerHTML = roman;
    return roman;
  }