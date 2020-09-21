

function teksti(){
  var muuttujaX = document.createElement("button");
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
  document.getElementById("ekaLista").classList.add("li")
}
var boksi = document.getElementById("boxi").value;
if(boksi.length < 2);
  {
    alert('Et laittanut ikääsi, tai olet liian nuori.');
    }
<<<<<<< HEAD
}

function enterJalkeen()
{
    if(syottopituus() > 0 && event.which == 13) // event.which == 13 (enterin painallus)
    {
         teeElementti(); //käynnistetään oletusfunktio
    }
}
var enterButton = "";
enterButton.addEventListener("click", painallusJalkeen());
listamuuttuja.addEventListener("keypress", enterJalkeen());*/
=======
>>>>>>> 9c192eaac419a27989e5d3fbfbbd80450dade6aa
