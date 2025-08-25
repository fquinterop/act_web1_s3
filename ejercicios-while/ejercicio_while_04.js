// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó.
let intentos = 0;
let numeroAleatorio;    
while (numeroAleatorio !== 50) {
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; 
    intentos++;          
}
console.log(`Número 50 generado después de ${intentos} intentos.`);
