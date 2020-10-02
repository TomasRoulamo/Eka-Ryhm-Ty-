function laheta(){ //Lähetä nappulan funktio
    
    //Etunimen tarkastus
    var eNimi = document.getElementById('etu').value;
    if(eNimi.length < 3){
        alert("Et antanut etunimeäsi!");
        return false;
    }
    
    //Sukunimen tarkastus
    var sNimi = document.getElementById('suku').value;
    if(sNimi.length < 4){
        alert("Et antanut sukunimeäsi!");
        return false;
    }

     //Osoitetietojen tarkastus
     var osoite = document.getElementById('osoite').value; 
     if(osoite.length < 5){
        alert('Et antanut lähiosoitettasi.');
        return false;
     }

     //Kaupungin tarkastus
     var kaupunki = document.getElementById('kaupunki').value; 
     if(kaupunki.length < 5){
        alert('Et antanut kaupunkisi nimeä');
        return false;
     }

     //Postinumeron tarkastus
     var posnro = document.getElementById('posnro').value; 
     if(posnro.length < 5){
        alert('Et antanut postinumeroasi.');
        return false;
     }
    
     //Puhelimen tarkastus 
     var pNro = document.getElementById('pnro').value; 
     if(pNro.length < 10){
         alert('Et antanut puhelinnumeroasi.');
         return false;
     }

    //Sähköpostin tarkastus
    var sPosti = document.getElementById('sposti').value;
    var ehdot = /\S+@\S+/;
        if(!ehdot.test(sPosti)){   
        alert("Anna kunnon sähköposti");
        return false;
    }
    
     //Työnantajan / oppilaitoksen tarkastus 
    var tanto = document.getElementById('tanto').value; 
    if(tanto.length < 5){
        alert('Et antanut työnantajasi tai oppilaitoksesi nimeä.');
       return false;
    }
     
    //Syntymäajan tarkastus
    var spaiva = document.getElementById('spaiva').value; 
    if(spaiva.length < 8){
        alert('Et antanut syntymäpäivääsi.');
        return false;
    }

    //Radion tarkastus
    var radio = document.getElementsByName('radio');
    var painettu = false;
        for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked==true) {
           painettu = true;
        }
    }
        if(painettu == false) {
            alert('Et ole valinnut pallukkaa.');
            return false;
    }

    //Ruokavalion tarkastus
    var rvalio = document.getElementById('boxi').value; 
    if(rvalio.length < 2){
        alert('Et kirjoittanut mitään erikoisruokavalio kohtaan.');
        return false;
    }

    //Jos kaikkiin kohtiin on vastattu niin kiitetään täyttäjää
    else{
        alert('Kiitos kun täytit lomakkeen. :)')
    }
}

/*fucntion tietoa(){
    document.getElementById('lisaa').innerHTML = 
}*/