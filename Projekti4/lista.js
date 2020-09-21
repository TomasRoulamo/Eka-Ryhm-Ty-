

function teksti(){
  var muuttujaX = document.createElement("button");
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
  document.getElementById("ekaLista").classList.add("li");
  
  /*var boksi = document.getElementById("boxi").value;// Tarkistaa uuden tehtävän pituuden
  if(boksi.length < 2);
    {
      alert('Et ole kirjoittanut lisättävää tehävää.');
    }*/
  }
