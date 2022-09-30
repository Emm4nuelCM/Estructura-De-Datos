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

/*
Mostrar todas las parejas de numeros amigos menores a 1000
  una pareja de numeros (num1,num2) se consideran amigos
  si se trata de numeros diferentes en donde ademas
  la suma de divisores del primer numero menores a el suman el segundo
  y la suma de divisores del segundo numero menores a el, suman el primero
  
  59,96
  502,204
  985,365
*/
function numAmigos(limite) {
    let amigos= [];
    for(num1=0;num1<=limite;num1++) {
        for(num2=0;num2<=limite;num2++) {
            if(num1==num2) {
                num2++;
            }

            let suma=0;
            for(i=1;i<num1;i++) {
                if(num1%i==0) {
                    suma+=i;
                }
            }

            if(suma==num2) {
                suma=0;
                for(i=1;i<num2;i++) {
                    if(num2%i==0) {
                        suma+=i;
                    }
                }
                if(suma==num1) {
                    if(amigos.length == 0) {
                        amigos.push(`${num1}-${num2}`);
                    } else {
                        for(i=0;i<amigos.length;i++) {
                            if(amigos[i]!=`${num2}-${num1}`) {
                                amigos.push(`${num1}-${num2}`);
                            }
                        }
                    }
                }
            }
        }        
    }
    return amigos;
}

console.log(numAmigos(1000));



