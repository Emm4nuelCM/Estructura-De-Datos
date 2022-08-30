
class Tortuga {
    constructor() {
        this.position = 0;
    }
    
    avanzar() {
        let prob = Math.floor(Math.random() *100)+1;
        if(prob<=50) {
            this.position+=3;
        } else if(prob<=70) {
            this.position-=6;
        } else {
            this.position++;
        }
    }
}

class Liebre {
    constructor() {
        this.position = 0;
    }
    
    avanzar() {
        let prob = Math.floor(Math.random()*100)+1;
        if(prob<=20) {
            this.position+=9;
        } else if(prob<=30) {
            this.position+=12;
        } else if(prob<=65) {
            this.position++;
        } else if(prob<=80) {
            this.position-=2;
        }
    }
}

let liebre = new Liebre(), tortuga = new Tortuga();
do {
    liebre.avanzar();
    tortuga.avanzar();
} while (tortuga.position<100 && liebre.position<100);

if(tortuga.position >= 100) {
    console.log(`La tortuga Gana con ${tortuga.position} puntos`);
    console.log(`La liebre obtuvo ${liebre.position} puntos`);
} else if(liebre.position >=100) {
    console.log(`La liebre Gana con ${liebre.position} puntos`);
    console.log(`La tortuga obtuvo ${tortuga.position} puntos`);
} else if(liebre.position>=100 && tortuga.position>=100) {
    console.log(`Empataron`);
}