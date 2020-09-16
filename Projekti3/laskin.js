var nro1= document.getElementById('1');//Kaikki muuttujat
var nro2= document.getElementById('2');
var nro3= document.getElementById('3');
var nro4= document.getElementById('4');
var nro5= document.getElementById('5');
var nro6= document.getElementById('6');
var nro7= document.getElementById('7');
var nro8= document.getElementById('8');
var nro9= document.getElementById('9');
var nro0= document.getElementById('0');
var plus= document.getElementById('+');
var miinus= document.getElementById('-');
var jako= document.getElementById('/');
var kerto= document.getElementById('*');
var pilkku= document.getElementById(',');
var nro;
function lisaa(luku){//luvun lisääminen

   nro += luku;
   
   document.getElementById('tulos').innerHTML = "<P>" + luku + "</P>";
   return false;
}

function laske(){//Lasku funktio


}

function taakse(){//Reverse funktio


}

function clear(){//Clear nappulalla saa päivitettyä koko sivun
   window.location.reload();
}