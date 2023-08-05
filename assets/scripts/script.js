

window.onload = function() {
    setGame(); 
}

function setGame() {
    // set up the grid for the game board in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9

        // create a div element for each tile
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("soil").appendChild(title);

    }
}