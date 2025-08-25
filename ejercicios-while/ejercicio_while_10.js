// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.
let calificacion;   
let sumaCalificaciones = 0;
let contadorCalificaciones = 0; 
let calificacionMasAlta = -Infinity;
let calificacionMasBaja = Infinity; 
while (true) {
    calificacion = Math.floor(Math.random() * 101); // Simulamos la entrada del usuario con un número aleatorio entre 0 y 100
    console.log(`Calificación ingresada: ${calificacion}`);
    if (calificacion === -1) {
        break; 
    }
    sumaCalificaciones += calificacion; 
    contadorCalificaciones++;       
    if (calificacion > calificacionMasAlta) {
        calificacionMasAlta = calificacion; 
    }
    if (calificacion < calificacionMasBaja) {
        calificacionMasBaja = calificacion; 
    }
}
if (contadorCalificaciones > 0) {

    const promedio = sumaCalificaciones / contadorCalificaciones;
    console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
    console.log(`Calificación más alta: ${calificacionMasAlta}`);
    console.log(`Calificación más baja: ${calificacionMasBaja}`);
}
else {
    console.log("No se ingresaron calificaciones.");
}