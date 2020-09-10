function laheta(lomake){ //Lähetä nappulan funktio
    
    //Etunimen tarkastus
    var eNimi = lomake.eka.value 
    if(eNimi.length < 3){
        alert("Et antanut etunimeäsi!");
        lomake.eka.focus();
        return false;
    }
    
    //Sähköpostin tarkastus
    var sPosti = lomake.toka.value;
    var ehdot = /\S+@\S+/;
        if(!ehdot.test(sPosti)){   
        alert("Anna kunnon sähköposti");
        lomake.toka.focus();
        return false;
    }
    
    //Iän tarkastus (kesken)
    var ika = lomake.kolmas.value 
    if(ika.length < 2){
        alert('Et laittanut ikääsi, tai olet liian nuori.');
        lomake.kolmas.focus();
        return false;
    }

    //Pallukoitten tarkastus
    var pallukka = lomake.suositus;
    var painettu = false;
        for (var i = 0; i < pallukka.length; i++) {
        if (pallukka[i].checked==true) {
           painettu = true;
        }
    }
        if(painettu == false) {
            alert('Et ole valinnut pallukkaa.');
            return false;
    }
    
    //Checkboxien tarkastus
    var boxit = lomake.mielipiteet; 
    var vastaus = false;
        for (var k=0; k < boxit.length;k++) {
        if (boxit[k].checked==true) {
           vastaus = true;
        }
    }
        if(vastaus == false){
            alert('Et ole valinnut laatikkoa.');
            return false;
        }
    
    //Tekstiboxin tarkastus
    var teksti = lomake.Teksti.value 
    if(teksti.length < 10){
        alert('Palautteesi täytyy olla vähintään 10 kirjainta pitkä.');
        lomake.Teksti.focus();
        return false;
    }
    if(teksti.length < 1000){
        alert('Palautteesi oli liian pitkä, se saa olla max 1000 merkkiä pitkä.');
        lomake.Teksti.focus();
        return false;
    }


}