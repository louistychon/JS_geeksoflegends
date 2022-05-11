import {
    enigme,
    reponsesEnigme
} from './enigmes.js';
import {
    bosses
} from './boss.js';
import {
    herost
} from './heros.js';
import {
    random
} from './random.js';



//définition d'un boss random, stocké dans une variable

let champion = random(herost);
let bossavaincre = random(bosses);
let attaqueoudefense;

//initialisation du match

console.log("un " + bossavaincre.nom + " sauvage apparaît, ses HP sont de " + bossavaincre.vie + ", ses dégats d'attaque sont de " + bossavaincre.attaque);
console.log(champion.nom + " a été désigné pour le combat, ses HP sont de " + champion.vie + ", ses dégats d'attaque sont de " + champion.attaque);
console.log("*************************** READYYYYYYYYY ? FIGHT !! ****************************************************************")

do {
    attaqueoudefense = Math.round(Math.random());
    attaqueoudefense == 1 ? champion.attaquer(bossavaincre) : champion.defense();
    bossavaincre.bossAttaquer(champion)
}
while (champion.mort === false);