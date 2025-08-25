// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

let numero = 123456789; // Puedes cambiar este número para probar con otros valores
let contadorDigitos = 0;    
let numeroCopia = Math.abs(numero); // Usamos el valor absoluto para manejar números negativos
if (numeroCopia === 0) {
    contadorDigitos = 1; // El número 0 tiene 1 dígito
}
while (numeroCopia > 0) {
    numeroCopia = Math.floor(numeroCopia / 10); 
    contadorDigitos++;        
}