
var height = 6; // numbers of guesses
var width = 5; // lenth of the wrd

var row = 0; // correct guess (attempt #)
var col = 0; //current letter for that attempt

var gameOver = false
var word = "SQUID";


window.onload = function(){
    intialize();
}

function intialize() {

    // create game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span"); 
            tile.id=r.toString() + "-" + c.toString(); 
            tile.classList.add("tile")
            tile.innerText = "P";
            document.getElementById("board").appendChild(tile)
        }
    }
}