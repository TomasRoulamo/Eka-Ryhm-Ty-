

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
            document.write ("You guessed the number " + arvaa + "<br/>");
            if (arvaa > num) {
                document.write ("You guessed too high, think smaller" + "<br/>");
                arvattu = false
                }
            else if (arvaa < num){
                document.write ("You guessed too low, think bigger" + "<br/");
                arvattu = false
                }
            else {
                alert("You guessed the right number!")
                arvattu = true}
        }
        while (arvattu = false) 
