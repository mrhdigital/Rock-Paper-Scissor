//alert("JS file is linked");

//create the variables to hold the numbers of wins, loses, and ties. These varibales starts with 0
var wins = 0;
var losses = 0;
var ties = 0;


// This function is run whenever key is pressed
// user selection of key pressed is stored in var userGuess
// write the function that stored the key user pressed in a variable userGuess
document.onkeyup = function (e) {
    var userGuess = e.key;


    // Create the array that list all the option for the computer to choose
    var computerChoices = ["r", "s", "p"];

    //computer randomly select the index value of the array computerChoices
    // and store this selection in a variable computerGuess
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



     var html = "<p> You choose: " + userGuess + "</p>" +
         "<p> Computer choose: " + computerGuess + "</p>"  +
             "<p> Wins: " + wins + "</p>" +
             "<p> Losses: " + losses + "</p>" +
             "<p> Ties: " + ties + "</p>";



      //Get the HTML content of a <p> element with id="userSelect"
        // //and Sets the content of an element to html
         document.getElementById("userSelect").innerHTML = html;

}
