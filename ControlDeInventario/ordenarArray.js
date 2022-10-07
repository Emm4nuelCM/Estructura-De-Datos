
let array = [5,8,6,2,9,7,3,1];
let array2 = [1,3,4,6,2];

function ordenarArray(array) {
    for(let i=0;i<array.length-1;i++) {
        for(let j=0;j<array.length-i-1;j++) {
            if(array[j]>array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
                console.log(array);
            }
        }
    }
    array2 = array;
}

console.log(array2);
//console.log(ordenarArray(array));
console.log(ordenarArray(array2));
console.log(array2);
