var satnum = Math.floor((Math.random() * 10) + 1);
    
function Numero(arpa)
{
  var arvaus = arpa.value;
  
    
    
    if (arvaus > satnum){
        alert("Liian korkea !");
        return false;
    }
    else if (arvaus < satnum){
        alert("Liian pieni!");
        return false;
    }
    else {
      alert("Voitit!");
      
    }
    

}
