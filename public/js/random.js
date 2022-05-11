function random(tableau) {
    return tableau[Math.floor(Math.random()*tableau.length)];
}

//roll the dices to know if you are able to attack.
let dices = [1, 2, 3, 4, 5, 6]

let randompick = random(dices); //call to the random function defined in the page boss.js
function resultatDes() {
    if (randompick <= 3) {
        console.log("le résultat du dé est " + randompick + "pas d'attaque, on dirait que tu vas devoir subir !")
    } else {
        console.log("vous pouvez attaquer")
    }
}

// random attack or defense function

export {random,
    randompick,
    dices
}