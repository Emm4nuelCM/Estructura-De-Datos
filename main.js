class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
        this.area = (this.altura*this.base)/2;
    }
    _getArea() {
        return this.area;
    }
}

//let triangulos = [];
let nti= new Triangulo(20, 10);
console.log(nti);



for(let i=1, inf=1; i<=5;i++, inf+2) {
    let s=4;
    let form=[];

};

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

