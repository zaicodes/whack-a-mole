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

    setInterval(setMole, 1000); // 1000 miliseconds = 1 second, every 1 second call setMole
    setInterval(setPlant, 2000); // 2000 miliseconds = 2 seconds, every 2 second call setPlant

}

function getRandomTile() {
    // math.random -- > (0-1) * 9 = (0-9) --> round down to (0-8)
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (currMoleTile) {
        currMoleTitle.innerHTML = "";
    }
    // create a mole

    let mole = document.createElement("img");
    mole.src = "/assets/images/mole.webp";

    // randomly place the mole on one of the holes
    
    let num = getRandomTile();
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}