
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
            tile.innerText = "";
            document.getElementById("board").appendChild(tile);
        }
    }
    // Listen for keyup
    document.addEventListener("keyup" , (e) =>{
        if (gameOver) return;

        // alert(e.code)
        if("KeyA" <= e.code && e.code <= "KeyZ"){
            if(col < width){
                let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                if (currentTile.innerText == "") {
                    currentTile.innerText = e.code[3];
                    col ++;
                }
            }
        }
                else if (e.code == "Backspace") {
                    if(0 < col && col <= width){
                        col --;
                    }
                    let currentTile = document.getElementById(row.toString() + "-" + col.toString());
                    currentTile.innerText = "";
                
            
        }
        else if (e.code == "Enter") {
    update();
    row += 1;
    col = 0;
        }

        if (!gameOver && row == height) {
            gameOver = true;
            document.getElementById("answer").innerText = wrd;
        }

    }) 
}

function update() {
    let correct = 0;
    for (let c = 0; c < width; c++) {
        let tile = document.getElementById(row.toString() + "-" + c);
        let letter = tile.innerText;

        if (word[c] == letter) {
            tile.classList.add("correct");
            correct++;
        }
        else if (word.includes(letter)) {
            tile.classList.add("present");
        }
        else {
            tile.classList.add("absent");
        }
        if (correct == width) {
            gameOver = true;

        }
    }

}