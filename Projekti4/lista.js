

function teksti(){
  var muuttujaX = document.createElement("button");
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
  document.getElementById("ekaLista").classList.add("li")
}

/*function painallusJalkeen()
{
    if(syottopituus() > 0) // tarkistetaan, onko edellä luotu funktion pituus > 0
    {
       teeElementti(); // jos on, käynnistetään oletusfunktio
    }
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
