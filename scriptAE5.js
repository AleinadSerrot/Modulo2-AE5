// formulario
const formulario = document.getElementById("formRegistro");

// captura de info en el área de mensajes
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // no se envía automático

    // captura de valores
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const edad = document.getElementById("edad").value;

    // validación de campos vacíos
    if (nombre === "" || correo === "" || edad === "") {
        mensaje.textContent = "Error: todos los campos son obligatorios";
        return;
    }

    // validación de edad
    if (isNaN(edad) || edad <= 17) {
        mensaje.textContent = "Error: la edad debe ser un mayor a 18 años";
        return;
    }

    // si todo está ok
    mensaje.textContent = "Registro exitoso, los datos ingresados son válidos.";
});
