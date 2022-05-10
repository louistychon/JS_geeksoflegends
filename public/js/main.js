import {enigme} from './enigmes.js';
import {sauron, chronos, lilith, random, bosses} from './boss.js';
import {merlin, ragnar, legolas} from './heros.js';


let bossavaincre = random(bosses)
console.log("un " + bossavaincre.nom  + " sauvage apparaît, ses HP sont de " + bossavaincre.vie );
legolas.attaquer(bossavaincre);
console.log("c'est super efficace " +  bossavaincre.nom  + " perd " + legolas.attaque + " ses nouveaux points de vie sont " + bossavaincre.vie) ;