var kortit = ['tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'morko.jpg', 'norsu.jpg', 'kissa.jpg', 'tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'morko.jpg', 'norsu.jpg', 'kissa.jpg'];
var vanhaKortti = 0;
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
      solu.setAttribute('alt', sekoitetut[(vanhaKortti)]);
      solu.setAttribute('id', 'solu' + vanhaKortti);
      solu.setAttribute('name', vanhaKortti);
      solu.setAttribute('onclick', 'nayta('+vanhaKortti+');');
      vanhaKortti += 1;
      solu.appendChild(sis);
      rivi.appendChild(solu);
    }
    tauluSis.appendChild(rivi);
  }
  taulu.appendChild(tauluSis);
  alue.appendChild(taulu);
  taulu.setAttribute('border', '2');//Taulukolle reunat
}

function nayta(nro){
var tunnus = document.getElementById('solu'+nro);
var altti = tunnus.getAttribute('alt');

if(vanha != -1){
  vanhaAlt.vanha.getAttribute('alt');
}
else{
  vanhaAlt= vanha;
}

tunnus.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';

if(altti == vanhaAlt){
  var altti = tunnus.getAttribute('alt');

  vanha.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
  tunnus.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
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

function odota(joku) {
  setTimeout(function(){

      joku.innerHTML = '';
  }, 5000);
}
