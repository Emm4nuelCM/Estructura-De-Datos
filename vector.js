let vector = [1,2,3,4,5,6,7,8,9,10];
let aux;
console.log(`Vector original: ${vector}`);

//aux=vector[9];
//vector[9]= vector[8];
//vector[8]= vector[7];
//vector[7]= vector[6];
//vector[6]= vector[5];
//vector[5]= vector[4];
//vector[4]= vector[3];
//vector[3]= vector[2];
//vector[2]= vector[1];
//vector[1]= vector[0];
//vector[0]=aux;

aux=vector[9];
for(let i=vector.length-1;i>=1;i--) {
    vector[i]= vector[i-1];
}
vector[0]=aux;
console.log(`Vector hacia atras: ${vector}`);

//aux=vector[0];
//vector[0]= vector[1];
//vector[1]= vector[2];
//vector[2]= vector[3];
//vector[3]= vector[4];
//vector[4]= vector[5];
//vector[5]= vector[6];
//vector[6]= vector[7];
//vector[7]= vector[8];
//vector[8]= vector[9];
//vector[9]=aux;

aux=vector[0];
for(let i=0;i<=vector.length-1;i++) {
    vector[i]= vector[i+1];
}
vector[9]=aux;
console.log(`Vector hacia delante: ${vector}`);


for(let i = 0; i <= (vector.length-1)/2; i++) {
    aux = vector [i];
    console.log(`auxiliar ${aux}`);

    vector [i] = vector [(vector.length-1)-i];
    console.log(`vector a quitar ${vector [i]}`);

    vector [(vector.length-1)-i] = aux;
    console.log(`posicion donde colocar auxiliar ${[(vector.length-1)-i]}`);

    console.log(`${vector}`);
    console.log("                 ");
}
console.log(`Vector invertido: ${vector}`);