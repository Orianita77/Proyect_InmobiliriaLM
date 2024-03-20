document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("myForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        // Validar campos antes de enviar el formulario
        if (!validateForm()) {
            return;
        }

        // Si todos los campos son válidos, enviar el formulario
        this.submit();
    });

    function validateForm() {
        let isValid = true;

        // Validar cada campo individualmente
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        // Validar nombre
        if (nameInput.value.trim() === "") {
            setErrorFor(nameInput, "El nombre es requerido");
            isValid = false;
        } else {
            setSuccessFor(nameInput);
        }

        // Validar email
        if (emailInput.value.trim() === "") {
            setErrorFor(emailInput, "El correo electrónico es requerido");
            isValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            setErrorFor(emailInput, "El correo electrónico no es válido");
            isValid = false;
        } else {
            setSuccessFor(emailInput);
        }

        // Validar mensaje
        if (messageInput.value.trim() === "") {
            setErrorFor(messageInput, "El mensaje es requerido");
            isValid = false;
        } else {
            setSuccessFor(messageInput);
        }

        return isValid;
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const errorMsg = formControl.querySelector(".error-message");
        formControl.classList.add("error");
        errorMsg.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.classList.remove("error");
    }

    function isValidEmail(email) {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});



//Valoracín mediante estrellas

document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input');

    stars.forEach((star) => {
        star.addEventListener('change', function() {
            console.log('Valor seleccionado:', this.value);
            // Aquí puedes enviar el valor seleccionado a tu servidor o realizar otras acciones
        });
    });
});



//Para Guardar la valoración del servicio
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input');
    const resultDisplay = document.getElementById('result');

    stars.forEach((star) => {
        star.addEventListener('change', function() {
            const rating = this.value;
            resultDisplay.textContent = `Valoración: ${rating} estrellas`;
        });
    });
});

//Para hacer el promedio de la valoración 
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.rating input');
    const resultDisplay = document.getElementById('result');
    const averageDisplay = document.getElementById('average');
    let totalRating = 0;
    let numRatings = 0;

    stars.forEach((star) => {
        star.addEventListener('change', function() {
            const rating = parseFloat(this.value);
            totalRating += rating;
            numRatings++;
            const averageRating = totalRating / numRatings;
            resultDisplay.textContent = `Valoración: ${rating} estrellas`;
            averageDisplay.textContent = `Valoración media: ${averageRating.toFixed(1)} estrellas`;
        });
    });
});






