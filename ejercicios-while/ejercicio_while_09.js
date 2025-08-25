// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
const maxIntentos = 7;
let adivinado = false;
while (intentos < maxIntentos && !adivinado) {
    const intentoUsuario = Math.floor(Math.random() * 100) + 1; // Simulamos un intento del usuario
    intentos++;
    console.log(`Intento ${intentos}: El usuario adivina ${intentoUsuario}`);
    if (intentoUsuario === numeroSecreto) {
        adivinado = true;
        console.log(`¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`);
    } else if (intentoUsuario < numeroSecreto) {
        console.log("El número es mayor.");
    } else {
        console.log("El número es menor.");
    }
}   
if (!adivinado) {
    console.log(`Lo siento, has agotado tus ${maxIntentos} intentos. El número era ${numeroSecreto}.`);
}