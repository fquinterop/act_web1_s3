// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.


function esPalindromo(texto) {  
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const longitud = textoLimpio.length;
    for (let i = 0; i < longitud / 2; i++) {
        if (textoLimpio[i] !== textoLimpio[longitud - 1 - i]) {
            return false;
        }
    }
    return true;  
}