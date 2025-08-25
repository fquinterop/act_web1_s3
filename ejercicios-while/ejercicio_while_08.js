// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.
let a = 0, b = 1;
let contador = 0;       
console.log("Secuencia de Fibonacci:");
while (contador < 20) {
    console.log(a);      
    let siguiente = a + b; 
    a = b;               
    b = siguiente;       
    contador++;          
}

