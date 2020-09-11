var satnum = Math.floor((Math.random() * 10) + 1);//arpoo random numeron 1-10 välillä
var ClickCount = 0; 

function Numero(arpa){ //kertoo onko luku jota painoit liian iso, pieni vai voititko pelin
  var arvaus = arpa.value;
  var maxyritys = 2;  
  
        if(ClickCount>maxyritys) {//katsoo onko nappuloita painettu enemmän kui 3 kertaa
            document.getElementById("vastaus").innerHTML = '<p>'+ "Käytit kaikki 3 yritystä!" +'</p>';
            return false;
    } 
        else{
		    ClickCount++;
    }
  
        if (arvaus > satnum){//kertoo jos luku on liian pieni
            document.getElementById("vastaus").innerHTML = '<p>'+ "Numero on liian suuri!" +'</p>';
            return false;
    }
        else if (arvaus < satnum){//kertoo jos luku on liian iso
            document.getElementById("vastaus").innerHTML = '<p>'+ "Numero on liian pieni!" +'</p>';
            return false;
    }
        else {//kertoo jos voitit
            document.getElementById("vastaus").innerHTML = '<p>'+ "Voitit!" +'</p>';
    }
    
}

function reload(){//Sivun päivittämiseen nappula
    window.location.reload();
}