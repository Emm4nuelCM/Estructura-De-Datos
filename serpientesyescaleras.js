class Dado {
    lanzar() {
        return Math.floor(Math.random()*6)+1;
    }
}


class Tablero {
    constructor() {
        this.tablero = (new Array(100-1)).fill(0);
        this.escaleras=[5,43,50,65,70,85];//Bajan a [55,80,69,95,92,94] ordenadamente
        this.serpientes=[17,28,39,55,78,88,99];//Bajan a [3,14,21,47,64,74,81] ordenadamente
    }
    
    
    comprobar() {
        
        for(let i=0;i<this.escaleras.length-1;i++) {
            if(player1.position==this.escaleras[i]) {
                player1.position=this.escaleras[i+1];
                console.log(`Jugador 1 Cayo en escalera, sube hasta ${this.escaleras[i+1]}`);
            } else if(player2.position==this.escaleras[i]) {
                        player2.position=this.escaleras[i+1];
                        console.log(`Jugador 2 Cayo en escalera, sube hasta ${this.escaleras[i+1]}`);
            }
        }
    }
}
let tablero = new Tablero();
console.log(tablero.tablero);
class Player {
    constructor() {
        this.position = 0;
        this.result = 0;
    }
    
    avanzar() {
        let dado = new Dado();
        let lanzar = dado.lanzar();
        this.result=lanzar;
        this.position+=lanzar;
        tablero.comprobar();
    }
}

let player1 = new Player(), player2 = new Player();
do {
    player1.avanzar();
    console.log(`Jugador 1 avanza ${player1.result} casillas`);
    console.log(`Jugador 1 esta en la casilla ${player1.position}`);
    player2.avanzar();
    console.log(`Jugador 2 avanza ${player2.result} casillas`);
    console.log(`Jugador 2 esta en la casilla ${player2.position}`);

    if(player1.position >=100) {
        console.log(`Jugador 1 Gana con ${player1.position} puntos`);
        console.log(`Jugador 2 obtuvo ${player2.position} puntos`);
    } else if(player2.position >=100) {
        console.log(`Jugador 2 Gana con ${player2.position} puntos`);
        console.log(`Jugador 1 obtuvo ${player1.position} puntos`);
    }
} while (player1.position<100 && player2.position<100);






