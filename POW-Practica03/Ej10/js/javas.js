var arrayNum = []; // Definimos un array vacío para los números

// Botones
var btnEnviar = document.getElementById("btnEnviar");
var btnSumar = document.getElementById("btnSumar");

// Función para cargar el número en el array
btnEnviar.addEventListener("click", function() {
    var inputNumero = document.getElementById("nro");
    var numero = parseInt(inputNumero.value);  // Convertir el valor a número entero

    if (!isNaN(numero)) {
        arrayNum.push(numero);  // Agregar el número al array
        inputNumero.value = '';  // Limpiar el campo de texto
    } else {
        alert("Por favor, ingrese un número válido.");
    }
});

// Función para sumar los números del array
btnSumar.addEventListener("click", function() {
    if (arrayNum.length > 0) {
        var suma = arrayNum.reduce(function(total, num) {
            return total + num;
        }, 0);
        document.getElementById("rtaNum").textContent = "La suma de los números es: " + suma;
    } else {
        alert("No se han cargado números.");
    }
});