//Ejercicio 2: Suma de una matriz
//Escribe una función recursiva llamada sumMatrix que reciba una matriz (arreglo bidimensional)
//de números y devuelva la suma de todos sus elementos. No se pueden utilizar bucles.

// Ejemplos:
//console.log(sumMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // 45
//console.log(sumMatrix([[1], [2], [3, 4], [5, 6]])); // 21

function sumMatrix(matriz) {
    if (matriz.length === 0) {
        return 0;
    }
    let SumFila = sumArr(matriz[0]); 
    return SumFila + sumMatrix(matriz.slice(1)); 
}

function sumArr(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArr(arr.slice(1));
}

console.log(sumMatrix([[3],[1,2,3,4],[25]])); 
