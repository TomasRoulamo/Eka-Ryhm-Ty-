function teksti(){
  var solmu = document.createElement("LI");
  var textisolmu = document.getElementById("boxi").value;
  solmu.appendChild(textisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
}
