function encontrarMenor(array) {
    return Math.min(...array);
}

let array1 = [12, 6, 10, 2, 45, 100];
let array2 = [1, 2, 3, 4, -1, 6, 7, 8, 9, 0];

console.log(encontrarMenor(array1)); 
console.log(encontrarMenor(array2));
