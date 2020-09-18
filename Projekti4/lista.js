var moi = event.which;

function teksti(){
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
}

function painallusJalkeen()
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

enterButton.addEventListener("click", painallusJalkeen());
listamuuttuja.addEventListener("keypress", enterJalkeen());