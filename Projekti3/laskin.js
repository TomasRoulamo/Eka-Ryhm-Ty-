var nro1, nro2, nro3, nro4, nro5, nro6, nro7, nro8, nro9, nro0, miinus, plus, pilkku, jako, kerto; //Kaikki muuttujat
nro1= document.getElementById('1');
nro2= document.getElementById('2');
nro3= document.getElementById('3');
nro4= document.getElementById('4');
nro5= document.getElementById('5');
nro6= document.getElementById('6');
nro7= document.getElementById('7');
nro8= document.getElementById('8');
nro9= document.getElementById('9');
nro0= document.getElementById('0');
plus= document.getElementById('+');
miinus= document.getElementById('-');
jako= document.getElementById('/');
kerto= document.getElementById('*');
pilkku= document.getElementById(',');

function lisaa(luku){//luvun lisääminen

   nro1 += luku;
   document.getElementById('tulos').innerHTML = luku;
   return false;
}

function laske(){//Lasku funktio


}

function taakse(){//Reverse funktio


}

function clear(){//Clear nappulalla saa päivitettyä koko sivun
   window.location.reload();
}