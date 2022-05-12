"use strict";

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



//définition d'un boss et champion random, stocké dans une variable

let champion = random(herost);
let bossavaincre = random(bosses);
let attaqueoudefense;

//initialisation du match

console.log("un " + bossavaincre.nom + " sauvage apparaît, ses HP sont de " + bossavaincre.vie + ", ses dégats d'attaque sont de " + bossavaincre.attaque);
console.log(champion.nom + " a été désigné pour le combat, ses HP sont de " + champion.vie + ", ses dégats d'attaque sont de " + champion.attaque);
console.log("*************************** READYYYYYYYYY ? FIGHT !! ****************************************************************")

function randomEnigme(bossavaincre) {
    if (bossavaincre.vie <= 0.2 * bossavaincre.vieMax) {
        let uneEnigme = enigme[Math.floor(Math.random()*enigme.length)] //génère une énigme random
        let responseEnigme = reponsesEnigme[enigme.indexOf(uneEnigme)]; //on stocke la réponse de l'énigme random dans responseEnigme
        console.log(uneEnigme)
        let essais = 0; //nombre de chances de répondre = 3 donc max index 2 dans la boucle
        let userinput;
        for (let index = 0; index < enigme.length; index++) {
            while (essais <= 2){
               userinput = prompt("20% des HP du BOSS !!! l'énigme du boss: " + uneEnigme); // le user entre sa réponse stockée dans userinput
                if (userinput == responseEnigme) {
                    console.log("vous gagnez le combat, gg")
                    essais += 2;
                    bossavaincre.vie = 0;
                    bossavaincre.mort = true;
                }
                else if(essais == 2){
                    console.log("le combat est perdu, c'est dommage !");
                    champion.vie = 0;
                    champion.mort = true;
                }
                else{
                    console.log("Faux, essai : " + essais );
                }
                essais++;
            }
        }
    }
}

do {
    attaqueoudefense = Math.round(Math.random());
    attaqueoudefense == 1 ? champion.attaqueSpeciale(bossavaincre) : champion.defense();
    randomEnigme(bossavaincre);
    bossavaincre.bossAttaquer(champion)
}
while (champion.mort === false && bossavaincre.mort === false);