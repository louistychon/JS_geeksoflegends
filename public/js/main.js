import {enigme} from './enigmes.js';
import {random, bosses} from './boss.js';
import {herost} from './heros.js';


//définition d'un boss random, stocké dans une variable
let champion = random(herost)
let bossavaincre = random(bosses)
//première apparition du boss
console.log("un " + bossavaincre.nom  + " sauvage apparaît, ses HP sont de " + bossavaincre.vie );
console.log(champion.nom + " a été désigné pour le combat");

//premiere action du personnage
champion.attaquer(bossavaincre);
//résultat sur le boss
console.log("c'est super efficace " +  bossavaincre.nom  + " perd " + champion.attaque + " ses nouveaux points de vie sont " + bossavaincre.vie) ;
champion.attaquer(bossavaincre);
console.log("c'est super efficace " +  bossavaincre.nom  + " perd " + champion.attaque + " ses nouveaux points de vie sont " + bossavaincre.vie) ;

