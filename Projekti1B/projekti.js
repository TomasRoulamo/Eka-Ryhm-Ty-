function tarkista(){
    
    
var eNimi = document.getElementById('eka').value; //Etunimen tarkastus
if(eNimi.length < 2){
    alert('Et ole laittanut etunimeäsi, etunimen täytyy olla suurempi kuin 2 kirjainta.');
}
var sPosti = document.getElementById('toka').value; //Sähköpostin tarkastus (kesken)

var ika = document.getElementById('kolmas').value; // Iän tarkastus
if(ika.length < 2){
    alert('Et joko laittanut ikääsi tai olet liian nuori');
}
var pallukat = document.getElementsByName('vastaukset').value; //Pallukoitten tarkastus

var boxi = document.getElementsByName('mielipiteet').value; //Chechboxien tarkastus

var teksti = document.getElementById('Teksti'); //Tekstiboxin tarkastus
if(teksti.length < 10){
alert('Palautteesi tarvitsee olla vähintään 10 kirjainta pitkä');

return false;
}

if (teksti.length < 1000)
alert('Palautteesi oli liian pitkä, max 1000 merkkiä.')
}