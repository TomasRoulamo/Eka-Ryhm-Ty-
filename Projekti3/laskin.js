var nro = ' ';

function lisaa(luku){//luvun lisääminen
   nro += luku; 
   
   document.getElementById('tulos').innerHTML = nro;
   
}

function laske(){//Lasku funktio
   nro = eval(nro);
   document.getElementById('tulos').innerHTML = nro;
}

function taakse(){//Reverse funktio

}

function clear(){//Clear nappulalla saa päivitettyä koko sivun
   window.location.reload();
}