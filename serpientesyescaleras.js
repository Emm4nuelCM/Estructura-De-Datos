class Dado {
    lanzar() {
        return Math.floor(Math.random()*6)+1;
    }
}

class Tablero {
    constructor() {
        this.tablero = (new Array(100)).fill(0);
        //ESCALERAS
        this.tablero[5-1]=1, this.tablero[43-1]=1, this.tablero[50-1]=1, this.tablero[65-1]=1, this.tablero[70-1]=1, this.tablero[85-1]=1;//Suben a [55,80,69,95,92,94] ordenadamente
        //SERPIENTES
        this.tablero[17-1]=2, this.tablero[28-1]=2, this.tablero[39-1]=2, this.tablero[55-1]=2, this.tablero[78-1]=2, this.tablero[88-1]=2, this.tablero[99-1]=2;//Bajan a [3,14,21,47,64,74,81] ordenadamente
    }
    
    comprobar(posicion) {
        let casilla = this.tablero[posicion-1];
        return casilla;
    }
}
let tablero = new Tablero();

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
        //SUBIR ESCALERA
        if(tablero.comprobar(this.position) == 1) {
            if(this.position == 5) {
                this.position = 55;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            } else if(this.position == 43) {
                this.position = 80;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            } else if(this.position == 50) {
                this.position = 69;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            } else if(this.position == 65) {
                this.position = 95;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            } else if(this.position == 70) {
                this.position = 92;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            } else if(this.position == 85) {
                this.position = 94;
                console.log(`Cayo en escalera y sube hasta ${this.position}`);
            }
        }

        //BAJAR SERPIENTE
        if(tablero.comprobar(this.position) == 2) {
            if(this.position == 17) {
                this.position = 3;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 28) {
                this.position = 14;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 39) {
                this.position = 21;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 55) {
                this.position = 47;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 78) {
                this.position = 64;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 88) {
                this.position = 74;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            } else if(this.position == 99) {
                this.position = 81;
                console.log(`Cayo en serpiente y baja hasta ${this.position}`);
            }
        }
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






