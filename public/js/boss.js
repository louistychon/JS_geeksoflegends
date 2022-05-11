class boss {
    constructor(nom, vie, attaque, mort) {
        this.nom = nom;
        this.vie = vie;
        this.attaque = attaque;
        this.mort = mort;
        // this.enigme = () => {
        //     if (this.vie <= 0.2 * this.vie) {
        //         console.log(Math.random(enigme))
        //     }
        // }
        this.bossAttaquer = (champion) => {
            if (this.mort === false && champion.vie > this.attaque){
                champion.vie -= this.attaque;
                console.log("le boss reussit son attaque, les nouveaux points de vie du champion sont : " + champion.vie)}
            else if (champion.vie <= this.attaque && champion.mort === false){
                champion.vie = 0;
                champion.mort = true;
                console.log("le boss achève le champion");
            }
        }
    }
}

let sauron = new boss("Sauron", 1000, 100, false);
let chronos = new boss("Chronos", 1500, 58, false);
let lilith = new boss("Lilith", 2000, 50, false);
let chogath = new boss("Chogath", 1700,30, false);

let bosses = [sauron, chronos, lilith, chogath];

export {
    bosses
};