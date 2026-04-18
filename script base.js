// Script para guardar información momentáneamente (en LocalStorage) desde un formulario de registro

document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario
    var form = document.getElementById('registroForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            // Obtener valores de los campos
            var nombre = form.querySelector('input[name="nombre"]') ? form.querySelector('input[name="nombre"]').value : '';
            var email = form.querySelector('input[name="email"]') ? form.querySelector('input[name="email"]').value : '';
            var password = form.querySelector('input[name="password"]') ? form.querySelector('input[name="password"]').value : '';

            // Crear objeto usuario
            var usuario = {
                nombre: nombre,
                email: email,
                password: password
            };

            // Guardar usuario temporalmente en LocalStorage
            localStorage.setItem('usuario_temp', JSON.stringify(usuario));

            // Mostrar mensaje de éxito
            var mensajeDiv = document.getElementById('mensaje');
            if (mensajeDiv) {
                mensajeDiv.innerHTML = '<p style="color: green;">¡Información guardada temporalmente!</p>';
            }

            // Opcional: Limpiar formulario
            form.reset();
        });
    }
});