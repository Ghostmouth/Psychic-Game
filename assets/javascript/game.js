    var wins = 0;

    var losses = 0;

    var guessesLeft = 9;

    var lettersGuessed = []; 

    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from
    document.onkeyup = function(event) {
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random alphabet letter
        lettersGuessed.push(userGuess); //pushing user guess to guesses so far
        if (userGuess == computerGuess) {
            wins++;
            
            guessesLeft = 9; //resets guesses back to 9
            lettersGuessed.length = 0; //removes everything from guesses array so previous rounds don't appear
        }
        else if (guessesLeft == 0){
            losses++;
            
            guessesLeft = 9;
            lettersGuessed.length = 0;
        }
        else if (userGuess !== computerGuess){
            guessesLeft--; //minus 1 guesses left
        }  

        // displays results in html  
        var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        lettersGuessed +
        "</p>"
        ;
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
    }