// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.
const numeros = [];
while (numeros.length < 15) {   
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    if (!numeros.includes(numeroAleatorio)) { 
        numeros.push(numeroAleatorio); 
    }
}
console.log("Array de números:", numeros);
const elementoBuscado = numeros[Math.floor(Math.random() * numeros.length)];
let posicion = -1;
let indice = 0;
while (indice < numeros.length) {
    if (numeros[indice] === elementoBuscado) {
        posicion = indice; 
        break;               
    }
    indice++;              
}
if (posicion !== -1) {
    console.log(`Elemento ${elementoBuscado} encontrado en la posición: ${posicion}`);
} else {
    console.log(`Elemento ${elementoBuscado} no encontrado en el array.`);
}

