//alert("JS file is linked");

//create the variables to hold the numbers of wins, loses, and ties. These varibales starts with 0
var wins = 0;
var losses = 0;
var ties = 0;
var userGuessWord = "";
var computerGuessWord = "";
var computerGuessWordImage = "";
var userGuessWordImage = "";
var gameMessage = "";


// This function is run whenever key is pressed
// user selection of key pressed is stored in var userGuess
// write the function that stored the key user pressed in a variable userGuess
document.onkeyup = function (e) {
    var userGuess = e.key;
    console.log(userGuess);
    if ((userGuess !== "r") && (userGuess !== "s") && (userGuess !== "p")) {
        window.alert("Please select r, s or p");
    }
    // convert the user guess letter into the actual word
    if (userGuess === "r") {
        userGuessWord = "Rock";
        userGuessWordImage = "<img src='assets/images/Rock.jpeg'alt='My Image' style='width:200px'>";
    }
    else if (userGuess === "s") {
        userGuessWord = "Scissor";
        userGuessWordImage = "<img src='assets/images/Scissor.jpeg'alt='My Image' style='width:200px'>";
    }
    else {
        userGuessWord = "Paper";
        userGuessWordImage = "<img src='assets/images/Paper.jpeg'alt='My Image' style='width:200px'>";
    }


    // Create the array that list all the option for the computer to choose
    var computerChoices = ["r", "s", "p"];

    //computer randomly select the index value of the array computerChoices
    // and store this selection in a variable computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // convert the computer guess letter into the actual word
    if (computerGuess === "r") {
        computerGuessWord = "Rock";
        computerGuessWordImage = "<img src='assets/images/Rock.jpeg'alt='My Image' style='width:200px'>";
    }
    else if (computerGuess === "s") {
        computerGuessWord = "Scissor";
        computerGuessWordImage = "<img src='assets/images/Scissor.jpeg'alt='My Image' style='width:200px'>";
    }
    else {
        computerGuessWord = "Paper";
        computerGuessWordImage = "<img src='assets/images/Paper.jpeg'alt='My Image' style='width:200px'>";
    }

    


    if (((userGuess === "r") || (userGuess === "s") || (userGuess === "p"))) {
        if ((userGuess === "r") && (computerGuess === "s")) {
            gameMessage = "Rock crushes Scissor: YOU WIN";
            wins++;
        }
        else if ((userGuess === "s") && (computerGuess === "r")) {
            gameMessage = "Rock crushes Scissor: YOU LOST";

            losses++;
        }
        else if ((userGuess === "r") && (computerGuess === "p")) {
            gameMessage = "Paper covers Rock: YOU LOST";

            losses++;
        }
        else if ((userGuess === "p") && (computerGuess === "r")) {
            gameMessage = "Paper covers Rock: YOU WIN";

            wins++;
        }
        else if ((userGuess === "s") && (computerGuess === "p")) {
            gameMessage = "Scissors cuts Paper: YOU WIN";

            wins++;
        }
        else if ((userGuess === "p") && (computerGuess === "s")) {
            gameMessage = "Scissors cuts Paper: YOU LOST";

            losses++;
        }
        else {
            ties++;
            gameMessage = "Both are the same : GAME TIES";

        }


        // var html = "<p> You choose: " + userGuess + "</p>" +
        //     "<p> Computer choose: " + computerGuess + "</p>" +
        //     "<p> Wins: " + wins + "</p>" +
        //     "<p> Losses: " + losses + "</p>" +
        //     "<p> Ties: " + ties + "</p>";

        document.getElementById("yourChoice").innerHTML = userGuessWord;
        document.getElementById("yourChoiceImage").innerHTML = userGuessWordImage;
        document.getElementById("compuerChoiceImage").innerHTML = computerGuessWordImage;

        document.getElementById("computerChoice").innerHTML = computerGuessWord;
        document.getElementById("tiesCounter").innerHTML = ties;
        document.getElementById("winCounter").innerHTML = wins;
        document.getElementById("lossCounter").innerHTML = losses;
        document.getElementById("gameMessage").innerHTML = gameMessage;
        console.log("you have entered " + userGuess);
        //"<span style='color: red;'>**Message</span>"

        //Get the HTML content of a <p> element with id="userSelect"
        // //and Sets the content of an element to html
        // document.getElementById("userSelect").innerHTML = html;

    }
}
