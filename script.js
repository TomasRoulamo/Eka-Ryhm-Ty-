function eka() { // Etunimen tarkastus
  var eNimi = form.eNimi.value;

if(eNimi.length<2)
{
alert("Et antanut etunimeäsi!\nEtunimen pitää olla enemmän kuin kaksi kirjainta pitkä");
form.eNimi.focus();
return false;
}
}

function toka() { // Salasanan tarkastus
  var Passu = form.Passu.value;

  if(Passu.length<3)
  {
  alert("Et antanut salasanaa tai se on liian lyhyt!\nSalasanan pitää olla enemmän kuin kolme kirjainta pitkä");
  form.Passu.focus();
  return false;
  }
}

{ //Radion valitseminen
  var pallukat = document.getElementsByName('vastaukset').value;
  if(pallukat = '')
  {
    alert("Et ole valinnut kohtaa 'Millainen koneen käyttäjä olet'");
  }

 { //Checkbox
    var kuutiot = document.getElementsByName('mielipiteet').value;
    if(kuutiot = '')
  }
    alert("Et ole valinnut kohtaa 'Mitä mieltä olet sivustani tähän asti?'");

    var Teksti = form.Teksti.value;

    if(Teksti.length<10)
    {
    alert("Et kirjoittanut palautteeseesi mitään tekstiä! (min. 10 merkkiä)");
    form.Teksti.focus();
    return false;
    }

    if(Teksti.length>1000)
    {
    alert("Palaute-tekstin pituus on rajattu 1000 merkkiin!");
    form.Teksti.focus();
    return false;
    }
