var satnum = Math.floor((Math.random() * 10) + 1);//arpoo random numeron 1-10 välillä
    
function Numero(arpa){ //kertoo onko luku jota painoit liian iso, pieni vai voititko pelin
  var arvaus = arpa.value;
  var maxyritys = 3;
  
  var counter = 0;
  
  while (counter < 3){
      counter++
      console.log(counter);
    }
    for(var i = 0; i < maxyritys; i++){
    if(maxyritys == 4){
        document.getElementById("Rivi").innerHTML = '<p>'+ "Käytit kaikki 3 yritystä!" +'</p>';
    }
    }

    if (arvaus > satnum){
        document.getElementById("Rivi").innerHTML = '<p>'+ "Numero on liian suuri!" +'</p>';
        return false;
    }
    else if (arvaus < satnum){
        document.getElementById("Rivi").innerHTML = '<p>'+ "Numero on liian pieni!" +'</p>';
        return false;
    }
    else {
        document.getElementById("Rivi").innerHTML = '<p>'+ "Voitit!" +'</p>';
    }
}

function reload(){//Sivun päivittämiseen nappula
    window.location.reload();
}