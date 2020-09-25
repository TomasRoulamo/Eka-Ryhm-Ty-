var kortit = ['tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg', 'tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg'];
var vanhaKortti = 0;
var vanha = -1;
var vanhaAlt;

function aloita(){
  sekoitetut = sekoita(kortit);
  var alue = document.getElementById('peliAlue');
  var taulu = document.createElement('table'); 
  var tauluSis = document.createElement('tbody');

  for(var i = 0; i < 4; i++){
    var rivi = document.createElement('tr');

  for(var t = 0; t < 4; t++){
      var solu = document.createElement('td');
      var sis = document.createTextNode('');
      solu.setAttribute('alt', sekoitetut[(vanhaKortti)]);
      solu.setAttribute('id', 'solu' + vanhaKortti);
      solu.setAttribute('name', vanhaKortti);
      solu.setAttribute('onclick', 'nayta('+vanhaKortti+');');
      //vanhaKortti += 1;
      solu.appendChild(sis);
      rivi.appendChild(solu);
    }
    tauluSis.appendChild(rivi);
  }
  taulu.appendChild(tauluSis);
  alue.appendChild(taulu);
  taulu.setAttribute('border', '2');
}

function nayta(nro){
var tunnus = document.getElementById('solu'+nro);
var altti = tunnus.getAttribute('alt');

tunnus.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
}

function sekoita(taulu)
{
    taulu.sort(function(a, b){return 0.5 - Math.random()});
    return taulu;
}