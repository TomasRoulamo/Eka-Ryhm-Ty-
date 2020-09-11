
function Numero();
<div>
var num = Math.floor(Math.random() * 10 + 1);
//guess variable to store the guessed number by user
var arvaa;
//output to store output to the user
var output;
//if the user guessed the number or not, initialize it to false
var arvattu = false;
var hintit = document.getElementById('hints');

//do/while loop, while condition is based on if the user NOT guessing the number (e.g. guessed == false)
do {
  arvaa = prompt("Arvaa numero 1 ja 10 välillä");
  hintit.textContent += "Arvasit numeron " + arvaa + '\n';
  if (arvaa > num) {
    elHints.textContent += "Arvasit liian suuren. Se on pienempi" + '\n';
    arvattu = false;
  } else if (arvaa < num) {
    elHints.textContent += "Arvasit liian pienen. Se on isompi." + '\n';
    arvattu = false;
  } else {
    alert("Arvasit oikein!")
    arvattu = true;
  }
}
while (arvattu === false);
