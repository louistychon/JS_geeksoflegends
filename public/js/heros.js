class heros {
    constructor(nom, vie, attaque, mort) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mort = mort;
        this.attaquer = (boss) => {
            if(boss.vie < this.attaque ){
                boss.vie = 0;
                console.log("le boss est mort, bien joué");
            }
            else{
                boss.vie -= this.attaque;
                console.log("Attaque réussie")
            }
        this.defense = () => {
            this.attaque /= 2;
            this.vie *= 2.5;
        }
    }
}
}

class guerrier extends heros {
    constructor(nom, vie, attaque, mort, rage) {
        super(nom, vie, mort, rage);
        this.attaque = attaque;
        this.rage = rage;
        this.attaqueGuerrier = (tour) => {
            this.attaquer()
            if (tour < 4) {
                this.rage += 1;
            } else if (tour == 4) {
                this.rage * 1.25
            } else{
                this.rage = 0;
            }
        }
    }
}

let nombrefleches = [7,8,9,10,11] //variable interne à la page, pas besoin d'export

class archer extends heros {
    constructor(nom, vie, attaque, mort, fleches) {
        super(nom, vie, attaque, mort);
        this.fleches = fleches;
        this.cpt = () => {
            this.fleches  = Math.random(nombrefleches)
        }
        this.attaqueArcher = (tour, fleches) => {
            this.attaquer()
            this.fleches -= 2;
            if(fleches <= 0){
                this.fleches = 0;
                tour += 1
            }
        }
    }
}

class mage extends heros {
    constructor(nom, vie, attaque, mort, mana) {
        super(nom, vie, attaque, mort);
        this.mana = mana;
        this.attaqueMage = (tour) => {
            if (this.mana <= 0){
                tour++;
                this.mana = 7;
            }else {
                this.attaquer();
                this.mana -= 2;
            }
        }
    }
}


let merlin = new mage("Merlin", 100, 50, false, 6);
let ragnar = new guerrier("Ragnar", 100, 75,false, 0);
let legolas = new archer("Legolas", 100, 250, false, 0);

let herost = [merlin, ragnar, legolas]

export {herost}