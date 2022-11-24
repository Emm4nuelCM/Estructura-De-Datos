//CREAR MATRICES  //CREAR MATRICES  //CREAR MATRICES  //CREAR MATRICES
let matrizNum=[];
let num=1;
for(let i=0; i<6;i++) {
    matrizNum[i]=[];
    for(let j=0;j<6;j++) {
        matrizNum[i][j]=num++;
    }
}

let matrizLetter=[['a','b','c','d','e','f'],
                  ['h','i','j','k','l','m'],
                  ['n','ñ','o','p','q','r'],
                  ['s','t','u','v','w','x'],
                  ['x','y','z','aa','ab','ac'],
                  ['ad','ae','af','ag','ah','ai']];

//OBTENER DIAGONALES  //OBTENER DIAGONALES  //OBTENER DIAGONALES  //OBTENER DIAGONALES
function diagonalPrin(matriz) {
    let tmp=[];
    for(let i=0;i<matriz.length;i++) {
        tmp.push(matriz[i][i]);
    }
    console.log(tmp);
}
function diagonalSec(matriz) {
    let tmp=[];
    for(let i=0, j=matriz.length-1;j>=0;i++, j--) {
        tmp.push(matriz[i][j]);
    }
    console.log(tmp);
}

//SUPERIORES-INFERIORES DIAGONAL PRINCIPAL  //SUPERIORES-INFERIORES DIAGONAL PRINCIPAL
function supDiagonalPrin(matriz) {
    let tmp=[];
    let tmp1=0;
    let tmp2=1;
    for(let i=tmp1;i<matriz.length-1; i++) {
        for(let j=tmp2;j<matriz.length;j++) {
            tmp.push(matriz[i][j]);
        }
        tmp2++;
    }
    console.log(tmp);
}
function infDiagonalPrin(matriz) {
    let tmp=[];
    let tmp1=1;
    for(let i=1;i<matriz.length; i++) {
        for(let j=0;j<tmp1;j++) {
            tmp.push(matriz[i][j]);
        }
        tmp1++;
    }
    console.log(tmp);
}

//SUPERIORES-INFERIORES DIAGONAL SECUNDARIA  //SUPERIORES-INFERIORES DIAGONAL SECUNDARIA
function supDiagonalSec(matriz) {
    let tmp=[], tmp1=matriz.length-1;
    for(let i=0;i<matriz.length-1;i++) {
        for(let j=0;j<tmp1;j++) {
            tmp.push(matriz[i][j]);
        }
        tmp1--;
    }
    console.log(tmp);
}
function infDiagonalSec(matriz) {
    let tmp=[], tmp1=matriz.length-1;
    for(let i=1;i<matriz.length;i++) {
        for(let j=tmp1;j<matriz.length;j++) {
            tmp.push(matriz[i][j]);
        }
        tmp1--;
    }
    console.log(tmp);
}

//LLAMADA A LAS FUNCIONES  //LLAMADA A LAS FUNCIONES  //LLAMADA A LAS FUNCIONES
diagonalPrin(matrizLetter);
supDiagonalPrin(matrizLetter);
infDiagonalPrin(matrizLetter);
supDiagonalSec(matrizLetter);
infDiagonalSec(matrizLetter);