var kortit = ['tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg', 'tiku.png', 'Aku.png', 'shifu.jpg', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg'];
var vanhaKortti = 0;
var vanha = -1;
var vanhaAlt;

function aloita(){
  var alue = document.getElementById('peliAlue');
  var taulu = document.createElement('table'); 
  var tauluSis = document.createElement('tbody');

  for(var i = 0; i < 4; i++){
    var rivi = document.createElement('tr');
  

  for(var j = 0; j < 4; j++){
      var solu = document.createElement('td');
      var sis = document.createTextNode('');
      //solu.setAttribute('alt', sekoitetut[(vanhaKortti)]);
      solu.setAttribute('id', 'solu' + vanhaKortti);
      solu.setAttribute('name', vanhaKortti);
      solu.setAttribute('onclick', 'painettu('+vanhaKortti+');');
      vanhaKortti += 1;
      solu.appendChild(sis);
      rivi.appendChild(solu);
    }
  }
}