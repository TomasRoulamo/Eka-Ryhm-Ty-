function eka() { // Etunimen tarkastus
  var eNimi = form.eNimi.value;

if(eNimi.length<2)
{
alert("Et antanut etunimeäsi!");
form.eNimi.focus();
return false;
}
}

function toka() { // Salasanan tarkastus
  var Passu = form.Passu.value;

  if(Passu.length<3)
  {
  alert("Et antanut salasanaa tai se on liian lyhyt!");
  form.Passu.focus();
  return false;
  }
}

function pelaaja() { //Radion pelaaja tarkastus
  var rVastaus=-1;
for (var i=0; i < form.rVastaus.length;i++) {
if (form.rVastaus[i].checked==true) {
rVastaus=i;
if(rVastaus==-1){
alert("Et valinnut vastataanko palautteeseesi!");
return false;
}

function koulu() { //Radion koulu tarkistus

}

function boomer() { //Radion boomer tarkistus

}
