document.addEventListener("DOMContentLoaded", function() {
    const properties = document.querySelectorAll(".property");

    // Agregar eventos de mouseover y mouseout a cada propiedad
    properties.forEach(property => {
        property.addEventListener('mouseover', () => {
            property.classList.add('hovered'); // Agregar clase cuando se pasa el mouse
        });

        property.addEventListener('mouseout', () => {
            property.classList.remove('hovered'); // Eliminar clase al quitar el mouse
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = 'No pierdas tiempo y contactanos con el numero de referencia del inmueble que te gusto para enviarte TODA la información!!';
    document.body.appendChild(notification);

    // Función para mostrar la notificación emergente automáticamente
    function showAutoNotification() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 9000); // Ocultar la notificación después de 9 segundos
    }

    // Mostrar la notificación automáticamente al cargar la página
    showAutoNotification();
});
