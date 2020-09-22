var ul = document.querySelector('ul');
var li = document.querySelector("li");
function teksti()
{
  var texti = document.getElementById("boxi");
  alert(texti.value);
  var solmu = document.createElement("LI");
  if(texti.value != '')
  {
    li.appendChild(document.createTextNode(texti.value));
  	ul.appendChild(li);
  	teksti.value = "";
  }

/*  var tekstisolmu = document.createTextNode(teksti);
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
