//Guardar Triangulos y su area
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.area = (this.altura*this.base)/2;
    }
    getArea() {
        return this.area;
    }
}
let triangulos = new Array();
let nti = new Triangulo(20, 10);
triangulos.push(nti);
console.log(triangulos);

function sumaDivs(numero) {
    let suma=0;
    for(let i=1; i<=numero; i++) {
        if(numero%i==0) {
            suma+=i;
        }
        return suma;
    }
}
function esPerfecto(numero) {
    if(numero==sumaDivs(numero)) {
        return true;
    } else {
        return false;
    }
}
for(let num=1; num<=1000;num++) {
    if(esPerfecto(num)==true) {
        console.log(num);
    }
}

