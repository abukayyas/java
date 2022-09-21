

var x = window.prompt("Entrez un nombre");
var y = window.prompt("Entrez un multiplicateur");
console.log(x);
console.log(y);

produit(x,y);
cube(x);
afficheImg();


function produit(x,y)
{ 
  var p = x*y;
  document.getElementById("txt1").innerHTML="le produit de "+ x + " x " +y+ " = " +p;
  //document.write("Le produit de "+x+"x"+y+" est egal à "+resultat+"<br>"+"Le cube de "+x+" est égal à "+cube);
  console.log(p);
  return p;
}

function cube(x) {
    var c = x*x*x;
}

function afficheImg() 
{
    var img = document.getElementById("img1");
    img.innerHTML= `<img src="/abu kayyas javascript/papillon.jpg">`;
    
}
//  function strtok(str1, str2, n)
//  {
//     const words =str1.split(str2);
//     alert( words[n-1]) ;
//  }
//  strtok("robert.dupont.amiens.8000",".", 3) 