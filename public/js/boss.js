class boss {
    constructor(nom, vieMax, vie, attaque, mort) {
        this.nom = nom;
        this.vie = vie;
        this.vieMax = vieMax;
        this.attaque = attaque;
        this.mort = mort;
        this.enigme = () => {
            if (this.vie <= 0.2 * this.vie) {
                x = enigme[Math.round(Math.random() * enigme.length)];
                prompt(x);
            }
        }
        this.bossAttaquer = (champion) => {
            if (this.mort === false && champion.vie > this.attaque) {
                champion.vie -= this.attaque;
                console.log("le boss reussit son attaque, les nouveaux points de vie du champion sont : " + champion.vie)
            } else if (champion.vie <= this.attaque && champion.mort === false) {
                champion.vie = 0;
                champion.mort = true;
                console.log("le boss achève le champion");
            }
        }
    }
}

let sauron = new boss("Sauron", 700, 700, 100, false);
let chronos = new boss("Chronos", 1000, 1000, 58, false);
let lilith = new boss("Lilith", 500, 500, 50, false);
let chogath = new boss("Chogath", 500, 500, 30, false);

let bosses = [sauron, chronos, lilith, chogath];

export {
    bosses
};