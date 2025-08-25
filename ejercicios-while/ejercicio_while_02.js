// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.
let sumaPares = 0;      

let contadorPares = 0;
let numero = 1;     
while (numero <= 100) {
    if (numero % 2 === 0) { 
        sumaPares += numero; 
        contadorPares++;     
    }
    numero++;           
}
console.log(`Suma de números pares entre 1 y 100: ${sumaPares}`);
console.log(`Cantidad de números pares sumados: ${contadorPares}`);     
