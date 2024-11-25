//Problema 4: Aplanar una matriz
//Escribe una función recursiva llamada flattenMatrix que reciba una matriz (arreglo
//bidimensional) y devuelva un arreglo unidimensional con todos los elementos en el mismo orden.

// Ejemplos:

//console.log(flattenMatrix([[1, 2], [3, 4], [5, 6]])); // [1, 2, 3, 4,5, 6]

//console.log(flattenMatrix([[1], [2, 3], [4, [5, 6]]])); // [1, 2, 3,4, 5, 6]
function flattenMatrix(m) {
    if (m.length === 0) {
        return [];
    }
    const primFila = m[0];  
    const matriz = m.slice(1);  

    if (Array.isArray(primFila)) {
        return [...flattenMatrix(primFila), ...flattenMatrix(matriz)];
    } else {
        return [primFila, ...flattenMatrix(matriz)];
    }
}

console.log(flattenMatrix([[112, 212], [92, 4], [22, 34]]));  



