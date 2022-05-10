class boss {
    constructor(nom, vie, attaque) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.enigme = (vie) => {
            console.log(Math.random(enigme))
        }
    }

}

let sauron = new boss("Sauron", 1000, 20);
let chronos = new boss("Chronos", 1200, 55);
let lilith = new boss("Lilith", 1250, 23);
let chogath = new boss("Chogath",700, 23);

let bosses = [sauron, chronos, lilith, chogath];

function random(tableau) {
    return tableau[Math.floor(Math.random()*tableau.length)];
}

export {random, bosses};
