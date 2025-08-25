// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    let contador = numero; 
    while (contador > 1) { 
        factorial *= contador; 
        contador--;         
    }
    return factorial;
}       
const numero = 5;
const resultado = calcularFactorial(numero);

console.log(`El factorial de ${numero} es ${resultado}.`);  
