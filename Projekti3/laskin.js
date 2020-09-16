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
   tulos = ['+', '-', '/', '*', '%'];

   for(var i = 0; i < nro.length; i++){
      for(var k = 0; k < tulos.length; k++){
         if(nro[i] = tulos[k]){
            indeksi = i;
         }
      }
   }
nro = nro.substr(0, indeksi);
}

function reload(){//Clear nappulalla saa päivitettyä koko sivun
   window.location.reload();
}