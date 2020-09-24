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

    var poisto = document.createElement("button");
    poisto.appendChild(document.createTextNode("X"));
    poisto.className= 'ks';
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

function lisaaListaanEnterilla(event)
{
	if (inputLength() > 0 && event.which ===13) { //Tarkistetaan, että Enter on painettu
		//nro 13 on Enterin avainkoodi, voidaan kirjoittaa myös event.keyCode === 13
		teksti(); // Kutsuu 'pääfunktiota'
	}
}
