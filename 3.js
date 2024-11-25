//Problema 3: Buscar un valor en una matriz
//Escribe una función recursiva llamada findInMatrix que reciba una matriz y un valor, y
//devuelva true si el valor se encuentra en la matriz y false si no. No puedes usar bucles.

// Ejemplos:

//console.log(findInMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5)); // true

//console.log(findInMatrix([[1, 2], [3, 4], [5, 6]], 10)); // false
function findInMatrix(matriz, n) {
    if (matriz.length === 0) {
        return false;
    }
    if (FindArr(matriz[0], n)) {
        return true;
    }
    return findInMatrix(matriz.slice(1), n);
}
function FindArr(arr, n) {
    if (arr.length === 0) {
        return false;
    }
    if (arr[0] === n) {
        return true;
    }
    return FindArr(arr.slice(1), n);
}

console.log(findInMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 5));
