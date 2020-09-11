var satnum = Math.floor((Math.random() * 10) + 1);
    
function Numero(arpa){
  var arvaus = arpa.value;
  
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

function restart(uus){

}
