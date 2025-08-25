// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.
const matriz = [];
for (let i = 0; i < 5; i++) {


    matriz[i] = [];
    for (let j = 0; j < 5; j++) {
        matriz[i][j] = i + j; 
    }
}
console.log("Matriz 5x5 (suma de índices):");
for (let i = 0; i < 5; i++) {       

    console.log(matriz[i].join(' ')); 
}   
