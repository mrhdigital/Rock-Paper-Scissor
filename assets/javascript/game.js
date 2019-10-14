//alert("JS file is linked");
// This function is run whenever key is pressed
// user selection of key pressed is stored in var userGuess
// write the function that stored the key user pressed in a variable userGuess
document.onkeyup = function (e) {
    var userGuess = e.key;


     var html = "<p> You choose: " + userGuess + "</p>";



      //Get the HTML content of a <p> element with id="userSelect"
        // //and Sets the content of an element to html
         document.getElementById("userSelect").innerHTML = html;

}
