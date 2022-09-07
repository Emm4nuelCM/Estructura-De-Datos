function hms(h,m,s) {
    let op=((((h*60)+m)*60)+s);
    return op;;
}


let entrada = hms(10,30,14);
let salida = hms(16,0,0);


let op = 0;
if(entrada>salida) {
    op = entrada-salida;
} else {
    op = salida-entrada;
}


let segundos = op%60;
let minutos = (op-segundos)/60;
let minutosRes = minutos%60;
let horas = (minutos-minutosRes)/60;

let formato = [horas, minutosRes, segundos];

console.log(formato);












