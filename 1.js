//Ejercicio 1: Encontrar el valor máximo en una lista
//Escribe una función recursiva llamada findMax que reciba un arreglo de números y devuelva el
//número más grande. No puedes usar métodos incorporados como Math.max.

//Ejemplos:
//console.log(findMax([1, 5, 3, 9, 2])); // 9
//console.log(findMax([10, 20, -5, 0])); // 20

function findMax(arr) {
    if (arr.length === 1) {
        // un caso base
        return arr[0];
    }
    const recur = findMax(arr.slice(1));
    if (arr[0] > recur) {
        return arr[0];
    }
    return recur;
}
console.log(findMax([314,12,3,0,12,0])); 

