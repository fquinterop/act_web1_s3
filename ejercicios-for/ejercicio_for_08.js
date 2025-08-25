// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.
const texto = "programacion";
const frecuencia = {};

for (let i = 0; i < texto.length; i++) {
    const char = texto[i];
    if (frecuencia[char]) {
        frecuencia[char]++;
    } else {
        frecuencia[char] = 1;
    }
}   
const caracteresOrdenados = Object.keys(frecuencia).sort();
console.log("Frecuencia de caracteres (ordenados alfabéticamente):");
for (const char of caracteresOrdenados) {
    console.log(`${char}: ${frecuencia[char]}`);
}

