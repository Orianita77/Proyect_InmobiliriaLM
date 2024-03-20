document.addEventListener("DOMContentLoaded", function() {
    const showNotificationBtn = document.getElementById('showNotificationBtn');
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'Ve a nuestro aparto de "coctancto" y mandanos una solicitud!! CORREE!!';
    document.body.appendChild(notification);

    // Función para mostrar la notificación emergente
    function showNotification() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000); // Ocultar la notificación después de 5 segundos
    }

    // Agregar evento al botón para mostrar la notificación
    showNotificationBtn.addEventListener('click', showNotification);
});
