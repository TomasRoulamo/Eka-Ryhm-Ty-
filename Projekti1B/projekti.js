function tarkasta(lomake){

    var eNimi = lomake.eka.value //Etunimen tarkastus
    if(eNimi.length < 3){
        alert('Et laittanut etunimeäsi, etunimen täytyy olla vähintään 3 kirjainta pitkä.')
    }

    var sPosti = lomake.toka.value //Sähköpostin tarkastus

    var ika = lomake.toka.value //Iän tarkastus
    if(ika.length < 2){
        alert('Et laittanut ikääsi, tai olet liian nuori.')
    }

    var pallukat = lomake.vastaukset.value //Pallukoitten tarkastus
    var vastaus = 0;
      for(var i = 0; i < pallukat.length; i++){
        if(pallukat[i].checked == 1){
          vastaus = 1;
        }
      }
      if(vastaus == 0){
        alert("Et ole valinnut mitään kohdasta 'Suosittelisitko Keudaa ystävällesi?'");
    }

    var boxit = lomake.vastaukset.value //Checkboxien tarkastus
    var vastaus = 0;
     for(var k = 0; k < boxit.length; k++){
       if(boxit[k].checked == 1){
         vastaus = 1;
       }
     }
     if(vastaus == 0){
       alert("Et ole valinnut mitään kohdasta: 'Parasta Keudassa on'");
    }

    var teksti = lomake.Teksti.value //Tekstiboxin tarkastus
    if(teksti.length < 10){
        alert('Palautteesi täytyy olla vähintään 10 kirjainta pitkä.');
        return;
    }
    if(teksti.length < 1000){
        alert('Palautteesi oli liian pitkä, se saa olla max 1000 merkkiä pitkä.')
        return;
    }
}