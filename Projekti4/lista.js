/* Luodaan alla olevat rivit hiiren ja enterin kuunteluun */
var hiirenPainallus = document.getElementById("nappula");
hiirenPainallus.addEventListener("click", lisaaHiirella);
var texti = document.getElementById("boxi");
texti.addEventListener("keypress", lisaaEnterilla);
/* Tähön loppuu kuuntelupainikkeet */

var ul = document.querySelector('ul');
/* li-elementti luodaan, ei Haeta eli alla oleva rivi poistetaan
var li = document.querySelector("li"); */

function teksti()
{
  /* Luodaan listaelementti, eli alla oleva rivi lisätään */
  var li = document.createElement("li");

  if(texti.value != '')
  {
    li.appendChild(document.createTextNode(texti.value));
  	ul.appendChild(li);
  	texti.value = "";
  }
/*  Nämä kummat jutut otettiin lpois, koska niitä ei tarvittu
  var texti = document.getElementById("boxi");
  alert(texti.value);
  var solmu = document.createElement("LI");

  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);*/


    var poisto = document.createElement("button");
    poisto.appendChild(document.createTextNode("X"));
    li.appendChild(poisto);
    poisto.addEventListener("click", poistaTehtava);

  function poistaTehtava()
  {
    li.classList.add("poistettu");
  }


  function crossOut()
  {
    li.classList.toggle("valmis");
  }
  li.addEventListener("click",crossOut);
}

/*Lisätään pääfunktion ulkopuolelle lisaaHiirella ja LisaasEnterilla -funktiot */
function lisaaHiirella()
{
  if (texti.value.length > 0)
  {
    teksti();
  }
}

function lisaaEnterilla(event)
{
  if(texti.value.length > 0 && event.which === 13)
  {
    teksti();
  }
}
