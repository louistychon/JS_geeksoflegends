class heros {
    constructor(nom, vie, attaque, mort) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mort = mort;
        this.attaquer = (boss) => {
            if (boss.vie <= this.attaque) {
                boss.vie = 0;
                boss.mort = true;
                console.log("Le champion reussit son attaque & Le boss meurt sur le coup, bien joué")
            } else if (this.vie > 0 && boss.mort === false) {
                boss.vie -= this.attaque;
                console.log("Le champion reussit son attaque, les nouveaux points de vie du boss sont : " + boss.vie)
            }
        }
        this.defense = () => {
            if(this.mort === false){
            this.attaque -= 2;
            this.vie += 50;
            console.log("le champion se défend, nouveaux points d'attaque : " + this.attaque + " et nouveaux points de vie " + this.vie)}
        }
    }
}


class guerrier extends heros {
    constructor(nom, vie, attaque, mort, rage) {
        super(nom, vie, mort, rage);
        this.attaque = attaque;
        this.rage = rage;
        this.attaqueSpeciale = () => {
            this.attaquer();
            if (rage < 4) {
                this.rage += 1;
            } else if (rage == 4) {
                this.rage * 1.25
            } else {
                this.rage = 0;
                console.log("la rage retombe à 0");
            }
        }
    }
}

let nombrefleches = [7, 8, 9, 10, 11] //variable interne à la page, pas besoin d'export

class archer extends heros {
    constructor(nom, vie, attaque, mort, fleches) {
        super(nom, vie, attaque, mort);
        this.fleches = nombrefleches[Math.round(Math.random(nombrefleches) * nombrefleches.length)];
        console.log(this.fleches);
        this.attaqueSpeciale = (tour) => {
            this.attaquer()
            this.fleches -= 2;
            console.log("rajour de 2 fleches")
            if (fleches <= 0) {
                this.fleches = 0;
            }
        }
    }
}

class mage extends heros {
    constructor(nom, vie, attaque, mort, mana) {
        super(nom, vie, attaque, mort);
        this.mana = mana;
        this.attaqueSpeciale = () => {
            if (this.mana <= 0) {
                this.mana = 7;
                console.log("le mana du mage remonte à 7")
            } else {
                this.attaquer();
                this.mana -= 2;
                console.log("-2 de mana pour le mage")
            }
        }
    }
}


let merlin = new mage("Merlin", 200, 200, false, 6);
let ragnar = new guerrier("Ragnar", 400, 300, false, 0);
let legolas = new archer("Legolas", 300, 250, false, 0);

let herost = [merlin, ragnar, legolas]

export {
    herost
}