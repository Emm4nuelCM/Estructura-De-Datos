class Dado {
    lanzar() {
        return Math.floor(Math.random()*6)+1;
    }
}

class Player {
    constructor() {
        this.position = 0;
        this.points = 0;
    }
    
    avanzar() {
        let dado = new Dado();
        let lanzar = dado.lanzar();
        if(lanzar==1) {
            this.points+=3;
        } else if(lanzar <= 4) {
            this.points+=2;
        } else {
            this.points++;
        }
    }
}

let player1 = new Player(), player2 = new Player();
do {
    player1.avanzar();
    player2.avanzar();

    if(player1.points >=100) {
        console.log(`Jugador 1 Gana con ${player1.points} puntos`);
        console.log(`Jugador 2 obtuvo ${player2.points} puntos`);
    } else if(player2.points >=100) {
        console.log(`Jugador 2 Gana con ${player2.points} puntos`);
        console.log(`Jugador 1 obtuvo ${player1.points} puntos`);
    }
} while (player1.points<100 && player2.points<100);



//let numeros = [];
//let dado = new Dado();
//for(let i=0; i<10;i++) {
//    numeros.push(dado.lanzar());
//}
//console.log(numeros);

//let points = 0;
//let lanzar = dado.lanzar();
//if(lanzar==1) {
//    points+=3;
//    console.log(`Obtuvo ${lanzar}, avanzas 3 pasos, su puntuacion es ${points}`);
//} else if(lanzar>=2 && lanzar <= 4) {
//    points+=2;
 //    console.log(`Obtuvo ${lanzar}, avanzas 2 pasos, su puntuacion es ${points}`);
//} else {
//    points+=1;
//    console.log(`Obtuvo ${lanzar}, avanzas 1 paso, su puntuacion es ${points}`);
//}