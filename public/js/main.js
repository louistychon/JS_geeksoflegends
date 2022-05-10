import {enigme} from './enigmes.js';
import {sauron, chronos, lilith} from './boss.js';
import {merlin, ragnar, legolas} from './heros.js'

console.log(enigme);
console.log(sauron, chronos, lilith)
console.log(merlin, ragnar, legolas)


legolas.attaquer(chronos);
legolas.attaquer(chronos);
console.log(chronos.vie);