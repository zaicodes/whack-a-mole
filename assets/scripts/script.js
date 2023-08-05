let currMoleTile;

window.onload = function() {
    setGame(); 
}

function setGame() {
    //set up the grid in html
    for (let i = 0; i < 9; i++) { //i goes from 0 to 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("soil").appendChild(tile);
    }
}

function getRandomTile() {
    // math.random -- > (0-1) * 9 = (0-9) --> round down to (0-8)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    let mole = document.createElement("img");
    mole.src = "/assets/images/mole.png";

    // randomly place the mole on one of the holes
    
    let num = getRandomTile();

}