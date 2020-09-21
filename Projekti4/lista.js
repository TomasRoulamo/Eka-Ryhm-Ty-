

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

=======
>>>>>>> 3b12c9ab8a7661e44f1753a680757c17b214763e
