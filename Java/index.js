document.addEventListener("DOMContentLoaded", function() {
    // Imágenes seleccionadas de la galería de propiedades
    const propertyImages = [
        "../imagenes/piso1.jpg",
        "../imagenes/piso2.avif",
        "../imagenes/piso 3.jpg",
        "../imagenes/piso4.jpg",
        "../imagenes/piso5.webp"
    ];

    // Contenedor donde se mostrarán las imágenes en la página de inicio
    const gallerySection = document.getElementById("gallerySection");

    // Mostrar las imágenes con animaciones
    propertyImages.forEach((image, index) => {
        // Crear un contenedor para cada imagen
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        // Crear la imagen
        const img = document.createElement("img");
        img.src = image;
        img.alt = `Propiedad ${index + 1}`;

        // Agregar eventos de mouseover y mouseout a la imagen
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.2)'; // Agranda la imagen al pasar el mouse
        });

        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)'; // Restaura el tamaño original de la imagen
        });

        // Agregar la imagen al contenedor
        imageContainer.appendChild(img);
        gallerySection.appendChild(imageContainer);

        // Aplicar animación de entrada con un retraso
        setTimeout(() => {
            imageContainer.classList.add("show");
        }, 200 * index); // Se agrega un retraso incremental para cada imagen
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Selección de todos los elementos con la clase "titulo"
    const titulos = document.querySelectorAll('.titulo');

    // Iterar sobre cada título y agregar estilos
    titulos.forEach(titulo => {
        // Agregar estilos de color y cursor al pasar el mouse
        titulo.addEventListener('mouseover', () => {
            titulo.style.color = 'red'; // Cambiar el color del texto a rojo
            titulo.style.cursor = 'pointer'; // Cambiar el cursor a un puntero al pasar el mouse
            titulo.style.textAlign = 'center'; // Centrar horizontalmente el título
        });

        // Restaurar estilos originales al retirar el mouse
        titulo.addEventListener('mouseout', () => {
            titulo.style.color = ''; // Restaurar el color original del texto
            titulo.style.cursor = ''; // Restaurar el cursor a su estado predeterminado
        });
    });
});
