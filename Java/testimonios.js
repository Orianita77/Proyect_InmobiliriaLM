// Obtener referencia al formulario y a la sección de comentarios
const commentForm = document.getElementById('commentForm');
const commentSection = document.getElementById('commentSection');

// Agregar evento de envío de formulario
commentForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío automático del formulario

    // Obtener los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar el formulario
    if (validateForm(name, email, message)) {
        // Crear un nuevo elemento para el comentario
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<strong>${name}</strong> (${email}):<br>${message}`;

        // Agregar el comentario a la sección de comentarios
        commentSection.appendChild(newComment);

        // Limpiar los campos del formulario
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    }
});

// Función para validar el formulario
function validateForm(name, email, message) {
    if (!name || !email || !message) {
        alert('Por favor, complete todos los campos.');
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Por favor, introduzca una dirección de correo electrónico válida.');
        return false;
    }
    return true;
}

// Función para validar el correo electrónico
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
