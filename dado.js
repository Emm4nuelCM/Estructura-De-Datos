/*
class Accurency {
    constructor() {
        this.cara1 = 0;
        this.cara2 = 0;
        this.cara3 = 0;
        this.cara4 = 0;
        this.cara5 = 0;
        this.cara6 = 0;
        this.tiros = 0;
    }
    
    aumentar() {
        let prob = Math.floor(Math.random() *6)+1;
        
        if(prob==1) {
            this.cara1++;
        } else if(prob==2) {
            this.cara2++;
        } else if(prob==3) {
            this.cara3++;
        } else if(prob==4) {
            this.cara4++;
        } else if(prob==5) {
            this.cara5++;
        } else {
            this.cara6++;
        }
        this.tiros++;
    }
}

let lanzamientos = new Accurency();

do {
    lanzamientos.aumentar();
} while (lanzamientos.tiros < 100);

console.log(`Cara 1 con ${lanzamientos.cara1} veces`);
console.log(`Cara 2 con ${lanzamientos.cara2} veces`);
console.log(`Cara 3 con ${lanzamientos.cara3} veces`);
console.log(`Cara 4 con ${lanzamientos.cara4} veces`);
console.log(`Cara 5 con ${lanzamientos.cara5} veces`);
console.log(`Cara 6 con ${lanzamientos.cara6} veces`);
*/

class Dado {
    lanzar() {
        return Math.floor(Math.random()*6)+1;
    }
}

let dado = new Dado();
let valores = [0,0,0,0,0,0,0,0,0,0,0];
for(let i=0;i<=100;i++) {
    suma = dado.lanzar() + dado.lanzar();
    valores[suma-2]++;
}

for(let i = 0; i<11;i++) {
    console.log(`El numero ${i+2} se repitio un total de ${valores[i]} veces`)
}