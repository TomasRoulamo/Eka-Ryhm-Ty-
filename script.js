function eka() {
  var eNimi = form.eNimi.value;

if(eNimi.length<2)
{
alert("Et antanut etunimeäsi!");
form.eNimi.focus();
return false;
}
}

function toka() {
  var Passu = form.Passu.value;

  if(Passu.length<3)
  {
  alert("Et antanut salasanaa!");
  form.Passu.focus();
  return false;
  }
}

function () {
  var rVastaus=-1;

for (var i=0; i < form.rVastaus.length;i++) {
if (form.rVastaus[i].checked==true) {
rVastaus=i;
if(intVastaus==-1){
alert("Et valinnut vastataanko palautteeseesi!");
return false;
}
