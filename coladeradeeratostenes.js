let iteraciones=0;
let valores = [];
let primos = [];
let maxDivisor = Math.floor(Math.sqrt(1000));

for(let i=0;i<1000-1;i++) {
    valores.push(true);
}

for(let i = 2;i<=maxDivisor;i++) {
    if(valores[i-2]) {
        for(let j = i;j<=Math.floor(1000/i);j++) {
            valores[(i*j)-2]=false;
            iteraciones++;
        }
    }
    iteraciones++;
}

for(let i = 2;i<1000;i++) {
    if(valores[i] == true) {
        primos.push(i);
    }
}

console.log(`Los numeros primos son: ${primos}`);
