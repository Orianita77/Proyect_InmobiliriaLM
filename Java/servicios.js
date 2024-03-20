document.addEventListener("DOMContentLoaded", function() {
    const serviciosHeader = document.getElementById('servicios-header');
    const serviciosInfo = document.getElementById('servicios-info');

    // Agregar evento para mostrar/ocultar servicios al pasar el mouse sobre el encabezado
    serviciosHeader.addEventListener('mouseover', function() {
        serviciosInfo.style.display = 'block'; // Mostrar servicios
    });

    serviciosHeader.addEventListener('mouseout', function() {
        serviciosInfo.style.display = 'none'; // Ocultar servicios
    });
});
