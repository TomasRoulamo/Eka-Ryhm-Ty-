

function teksti(){
  var muuttujaX = document.createElement("ekaLista");
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
  document.getElementById("ekaLista").classList.add("li")
  
  var boksi = document.getElementById("boxi").value;//Tarkistaa uuden tehtävän pituuden
  if(boksi.length < 2);
    {
      alert('Et ole kirjoittanut lisättävää tehävää.');
    }
<<<<<<< HEAD
    muuttujaX.appendChild(document.createTextNode("X"));
=======
  }
>>>>>>> a2886eb4a912fa4baa41344b4b3277bbd44b12e4
