

var num = Math.floor(Math.random() * 10 + 1)
        //guess variable to store the guessed number by user
            var arvaa
        //output to store output to the user
            var tulos
        //if the user guessed the number or not, initialize it to false
            var arvattu = false

        //do/while loop, while condition is based on if the user NOT guessing the number (e.g. guessed == false)
        do {
            arvaa = prompt ("Arvaa numero 1 ja 10 välillä.");
            document.write ("Arvasit " + arvaa + "<br/>");
            if (arvaa > num) {
                document.write ("Arvasit liian korkean. Se on pienempi." + "<br/>");
                arvattu = false
                }
            else if (arvaa < num){
                document.write ("Arvasit liian alhaisen. Se on isompi." + "<br/");
                arvattu = false
                }
            else {
                alert("Arvasit oikein!")
                arvattu = true}
        }
        while (arvattu = false)

        document.getElementById('pakka').innerHTML = '<p>'+kortit+'</p>';