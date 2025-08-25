// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.
const lanzamientos = 1000;
const frecuenciaSuma = {};              
for (let i = 2; i <= 12; i++) {
    frecuenciaSuma[i] = 0;               
}


for (let i = 0; i < lanzamientos; i++) {
    const dado1 = Math.floor(Math.random() * 6) + 1; 
    const dado2 = Math.floor(Math.random() * 6) + 1; 
    const suma = dado1 + dado2; 
    frecuenciaSuma[suma]++;               
}   
console.log("Frecuencia de sumas de dos dados tras 1000 lanzamientos:");
for (let suma = 2; suma <= 12; suma++) {
    console.log(`Suma ${suma}: ${frecuenciaSuma[suma]} veces`);
}


let sumaMasComun = 2;
let maxFrecuencia = frecuenciaSuma[2];
for (let suma = 3; suma <= 12; suma++) {
    if (frecuenciaSuma[suma] > maxFrecuencia) {
        maxFrecuencia = frecuenciaSuma[suma];
        sumaMasComun = suma;
    }
}           

console.log(`La suma más común fue ${sumaMasComun} con ${maxFrecuencia} apariciones.`);
