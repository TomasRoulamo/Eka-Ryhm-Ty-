function teksti(){
  var solmu = document.createElement("LI");
  var teksti = document.getElementById("boxi").value;
  var tekstisolmu = document.createTextNode(teksti);
  solmu.appendChild(tekstisolmu);
  document.getElementById("ekaLista").appendChild(solmu);
  }

  var ul = document.querySelector('ul');
  var li = document.querySelector("li"); 

  if(boxi.value == 0){
    li.appendChild(document.createTextNode(boxi.value));
  	ul.appendChild(li); 
  	boxi.value = ""; 
  }  
  
  var poisto = document.createElement("nappula");
    poisto.appendChild(document.createTextNode("X"));
    li.appendChild(poisto);
    poisto.addEventListener("click", poistaTehtava);

function poistaTehtava(){
  li.classList.add("poistettu");
  
}


function crossOut() {
    li.addEventListener("click",crossOut);
    li.classList.toggle("valmis");
	}

