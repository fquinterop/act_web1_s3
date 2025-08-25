// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.

const niveles = 10;
for (let i = 1; i <= niveles; i++) {
    let fila = '';
    // Espacios en blanco para centrar la pirámide
    for (let j = 1; j <= niveles - i; j++) {
        fila += ' ';
    }
    // Asteriscos para formar la pirámide
    for (let k = 1; k <= (2 * i - 1); k++) {
        fila += '*';
    }
    console.log(fila);  
}                               