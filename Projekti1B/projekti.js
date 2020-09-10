function tarkasta(lomake){

    var eNimi = lomake.eka.value //Etunimen tarkastus
    if(eNimi.length < 3){
        alert("Et antanut etunimeäsi!");
        lomake.eka.focus();
        return false;
    }

    // var sPosti = lomake.toka.value //Sähköpostin tarkastus

    var ika = lomake.toka.value //Iän tarkastus
    if(ika.length < 2){
        alert('Et laittanut ikääsi, tai olet liian nuori.')
        lomake.toka.focus();
        return false;
    }

    //Pallukoitten tarkastus
    var intVastaus=-1;

        for (var i=0; i < form.vastaukset.length;i++) {
        if (form.vastaukset[i].checked==true) {
        intVastaus=i;
    }
    if(intVastaus==-1){
        alert("Et valinnut pallukkaa!");
        return false;
    }
}

    var boxit = lomake.mielipiteet.value //Checkboxien tarkastus
    var vastaus2 = 0;
     for(var k = 0; k < boxit.length; k++){
       if(boxit[k].checked == 1){
         vastaus2 = 1;
       }
     }
     if(vastaus2 == 0){
       alert("Et ole valinnut mitään kohdasta: 'Parasta Keudassa on'");
    }

    var teksti = lomake.Teksti.value //Tekstiboxin tarkastus
    if(teksti.length < 10){
        alert('Palautteesi täytyy olla vähintään 10 kirjainta pitkä.');
       
    }
    if(teksti.length < 1000){
        alert('Palautteesi oli liian pitkä, se saa olla max 1000 merkkiä pitkä.')
        
    }
}