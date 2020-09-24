var kortit = ['tiku.png', 'Aku.png', 'shifu.png', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg', 'tiku.png', 'Aku.png', 'shifu.png', 'karhu.png', 'lintu.jpg', 'mörkö.jpg', 'norsu.jpg', 'kissa.jpg'];
var vkortti = 0;
var vanha = -1;
var vAlt;

function aloita() {
    // Sekoitetaan alkuperäinen taulukko
     sekoitetut = sekoita(kortit);
     // Haetaan HTML-sivulta paikka, johon peli tulee
     var paikka = document.getElementById('peliAlue');
     // Luodaan peliä varten taulukkoelementti
     var taulukko = document.createElement('table');
     // Luodaan peliä varten taulukon sisältö elementti
    var taulukonSisus = document.createElement('tbody');
    // Itse taulukon luominen, ulompi for tekee rivit ja sisempi sarakkeet
    for(var i = 0; i < 4; i++)
    {
      // Luodaan rivielementti
      var rivi = document.createElement('tr');
  
      for(var j = 0; j < 4; j++)
      {
        // luodaan sarake-elementti
        var solu = document.createElement('td');
        // luodaan elementti, johon kortti asetetaan
        var sisus = document.createTextNode('');
        // Määritetään kortin alt-muuttuja, 0 - 15, eli jokaisella kortilla omansa
        solu.setAttribute('alt', sekoitetut[(vkortti)]);
        // Määritetään kortin id-muuttuja: solu+numero, esim. solu12
        solu.setAttribute('id', 'solu' + vkortti);
        // Määritetään kortin name-muuttuja 0 - 15, jokaisella omansa
        solu.setAttribute('name', vkortti);
        // Määritetään kortille onclick -toiminta, kutsutaan nayta-funktiota
        solu.setAttribute('onclick', 'nayta('+vkortti+');');
        // kasvatetaan laskuria yhhdellä
        vkortti += 1;
        // syötetään ylläolevat muutoksen kortin-tietoihin
        solu.appendChild(sisus);
        // syötetään ylläolavat muutokset rivin tietoihin
        rivi.appendChild(solu);
      }
      // syötetään rivit taulukon tbody-elementtiin
      taulukonSisus.appendChild(rivi);
    }
    // syötetään lopuksi taulukon tbody-elementti taulukkoon
    taulukko.appendChild(taulukonSisus);
    // Ja aivan viimeiseksi syötetään taulukko sille varattuun paikkaan
    paikka.appendChild(taulukko);
    // Määritetään taulukolle CSS-arvo border, joka on 2px
    taulukko.setAttribute('border', '2');
  }

  function sekoita(taulukko)
  {
      taulukko.sort(function(a, b){return 0.5 - Math.random()});
      return taulukko;
  }

  function nayta(numero)
{
  // haetaan napautettu kortti
  var tunnus = document.getElementById('solu'+numero);
  // haetaan napautetun kortin alt-muuttuja
  var altti = tunnus.getAttribute('alt');
  // tarkistetaan, onko kortteja napautettu aiemmin
  if(vanha != -1)
  {
    // jos on, haetaan vanhan kortin alt-muuttuja
    vAlt = vanha.getAttribute('alt');
  }
  else{
    // muussa tapauksessa syötetään siihen -1
    vAlt = vanha;
  }

  // syötetään napautetun taustan tilalle valitun kortin kuva
  tunnus.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
  // tarkastetaan, onko edellinen kortti ja nykyinen kortti samoja (altit)
  if(altti == vAlt){
    // mikäli ovat, haetaan nykyisen kortin alt-muuttuja
    var altti = tunnus.getAttribute('alt');
    // näytetään vanhakortti
    vanha.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
    // näytetään uusi kokrtti
    tunnus.innerHTML = '<img src="KuvatTaiJtn/'+altti+'">';
  }
  else{
    // muussa tapauksessa tehdään nykyisestä kortista vanha
    vanha = tunnus;
    // pysäytetään ohjelman suoritus hetkeksi
    odota(tunnus);
  }
}