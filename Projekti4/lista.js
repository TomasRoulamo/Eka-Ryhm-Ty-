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
  }
  function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);

  var poisto = document.createElement("button"); // luodaan painike-elementti
  	poisto.appendChild(document.createTextNode("X")); // Lisätään siihen X-kirjain
  	li.appendChild(poisto); // Lisätään se kaikkiin li-elementteihin
  	poisto.addEventListener("click", poistaTehtava);
    
    function poistaTehtava()
{
  li.classList.add("delete")
}
}
