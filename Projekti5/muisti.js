var kortit = ['tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'morko.jpg', 'norsu.jpg', 'kissa.jpg', 'tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'morko.jpg', 'norsu.jpg', 'kissa.jpg'];
var sKortti = 0;
var vanha = -1;
var vanhaAlt;

function aloita(){//Kun sivu avataan nii kaikki tässä tapahtuu
  sekoitetut = sekoita(kortit);

  var alue = document.getElementById('peliAlue');
  var taulu = document.createElement('table');
  var tauluSis = document.createElement('tbody');

  for(var i = 0; i < 4; i++){
    var rivi = document.createElement('tr');

  for(var t = 0; t < 4; t++){//Tämä ja ylempi for kommento luo taulukon
      var solu = document.createElement('td');
      var sis = document.createTextNode('');
      solu.setAttribute('alt', sekoitetut[(sKortti)]);
      solu.setAttribute('id', 'solu' + sKortti);
      solu.setAttribute('name', sKortti);
      solu.setAttribute('onclick', 'nayta('+sKortti+');');
      sKortti += 1;
      solu.appendChild(sis);
      rivi.appendChild(solu);
    }
    tauluSis.appendChild(rivi);
  }
  taulu.appendChild(tauluSis);
  alue.appendChild(taulu);
  taulu.setAttribute('border', '2');//Taulukolle reunat
}

function nayta(nro){//Näyttää kortin jota painetaan
var tunnus = document.getElementById('solu'+nro);
var altti = tunnus.getAttribute('alt');

if(vanha != -1){
  vanhaAlt = vanha.getAttribute('alt');
}
else{
  vanhaAlt= vanha;
}

tunnus.innerHTML = '<img src="Kuvat/'+altti+'">';

if(altti == vanhaAlt){
  vanha.innerHTML = '<img src="Kuvat/'+altti+'">';
  tunnus.innerHTML = '<img src="Kuvat/'+altti+'">';
}
else{
  vanha = tunnus;
  odota(tunnus);
}
}

function sekoita(taulu){//Sekoittaa taulun heti alussa
    taulu.sort(function(a, b){return 0.5 - Math.random()});
    return taulu;
}

function odota(joku) {//Kuva pysyy näkyvillä 5 sec ennenkuin menee takas taustan alle
  setTimeout(function(){
<<<<<<< HEAD
<<<<<<< HEAD

      joku.innerHTML = '';
  }, 5000);
}
=======
<<<<<<< HEAD
     joku.innerHTML = '';
   }, 5000);
}
=======

      joku.innerHTML = '';
  }, 5000);
}
>>>>>>> 9603eeeecf1217acb9dcb00c415ea786d74f01f8
>>>>>>> 4f125acc6af1b281c0be387359c5df48b7c78747
=======
     joku.innerHTML = '';
   }, 5000);
}
>>>>>>> dd4fec50c2c186cf429c1a719b5de32c39078482
