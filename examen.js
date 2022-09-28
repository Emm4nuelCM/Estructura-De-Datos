//NUMERO 1
let vector = [];
for(let i = 0; i<10;i++) {
    vector.push(Math.floor(Math.random()*(70 - 31) + 31));
}

//NUMERO 2
function impares(vector) {
    let impares = 0;
    for(let i = 0; i < vector.length; i++) {
        if(vector[i]%2 == 1) {
            impares++;
        }
    }
    return impares;
}

//NUMERO 3
function promedio(vector) {
    let suma = 0;
    for(let i = 0; i < vector.length; i++) {
        suma = vector[i] + suma;
    }
    let promedio=suma/vector.length;
    let iguales=0;
    for(let i = 0; i < vector.length; i++) {
        if(vector[i]==Math.floor(promedio)) {
            iguales++;
        }
    }
    return iguales;
}

//NUMERO 4
function comun(vector1, vector2) {
    let comunes=[];
    for(let i = 0; i < vector1.length; i++) {
        vector1[i];
        for(let j = 0; j < vector2.length; j++) {
            if(vector1[i] == vector2[j]) {
                comunes.push(vector1[i]);
            }
        }
    }
    return comunes;
}



