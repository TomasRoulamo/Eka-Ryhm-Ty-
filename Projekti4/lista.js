function teksti(){
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);


  var li = document.createElement("li"); // luo "li" elementin
  // Tarkistetaan, että on syötetty jotain
  if(input.value != '')
  {
    li.appendChild(document.createTextNode(input.value)); //lisätään li-elementtiin tekstin, joka on laatikossa
  	ul.appendChild(li); //lisää li-elementin ul-elementtiin
  	input.value = ""; // Tyhjentää syöttökentän
  }
    var poisto = document.createElement("button");
poisto.appendChild(document.createTextNode("X"));
li.appendChild(poisto);
poisto.addEventListener("click", poistaTehtava);

function poistaTehtava()
{
  li.classList.add("delete")
}
  }
  function crossOut() {
    li.addEventListener("click",crossOut);
    li.classList.toggle("valmis");
    return false;
	}
