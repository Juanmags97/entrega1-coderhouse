 // Función para capturar la cantidad de zapatos
function capturarCantidadZapatos() {
    // Solicitar al usuario que ingrese la cantidad de zapatos
    let cantidadZapatos = prompt("Ingrese la cantidad de zapatos en el local:");

    // Verificar si el valor ingresado es un número válido
    if (isNaN(cantidadZapatos) || cantidadZapatos === null || cantidadZapatos.trim() === "") {
        alert("Por favor, ingrese un número válido.");
    } else {
        // Convertir el valor ingresado a número entero
        cantidadZapatos = parseInt(cantidadZapatos, 10);

        // Mostrar la cantidad de zapatos mediante un alert
        alert("La cantidad de zapatos en el local es: " + cantidadZapatos);
    }
}

// Llamar a la función para capturar la cantidad de zapatos
capturarCantidadZapatos();