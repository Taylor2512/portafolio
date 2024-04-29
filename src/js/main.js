
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('#navbarMenu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Obtén todas las referencias necesarias
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Verifica si hay elementos de la barra de navegación
    if ($navbarBurgers.length > 0) {
        // Añade un evento de click en cada uno
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Obtén el objetivo del menú
                const target = el.dataset.target;
                const $target = document.getElementById(target);

                // Cambia la clase 'is-active' en el menú de hamburguesa
                el.classList.toggle('is-active');
                // Cambia la clase 'is-active' en el menú desplegable
                $target.classList.toggle('is-active');
            });
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Función para validar nombres, apellidos y correo electrónico
    const validarCampo = (inputElement, regex, mensajeError) => {
        const valor = inputElement.value.trim();
        if (valor === '') {
            mostrarError(inputElement, 'Este campo es obligatorio');
        } else if (!regex.test(valor)) {
            mostrarError(inputElement, mensajeError);
        } else {
            ocultarError(inputElement);
        }
    };

    // Función para mostrar mensaje de error
    /**
     * Muestra un mensaje de error en un elemento de entrada y agrega estilos correspondientes.
     * @param {HTMLElement} inputElement - El elemento de entrada donde se mostrará el error.
     * @param {string} mensaje - El mensaje de error a mostrar.
     * @returns {void}
     */
    const mostrarError = (inputElement, mensaje) => {
        const controlElement = inputElement.closest('.control');
        if (controlElement) {
            controlElement.classList.add('has-icons-right', 'has-icons-danger');
            const errorElement = controlElement.querySelector('.help');
            if (errorElement) {
                errorElement.textContent = mensaje;
            } else {
                const newErrorElement = document.createElement('p');
                newErrorElement.classList.add('help', 'is-danger');
                newErrorElement.textContent = mensaje;
                controlElement.appendChild(newErrorElement);
            }
        }
    };

    // Función para ocultar mensaje de error
    const ocultarError = (inputElement) => {
        const controlElement = inputElement.closest('.control');
        if (controlElement) {
            controlElement.classList.remove('has-icons-right', 'has-icons-danger');
            const errorElement = controlElement.querySelector('.help');
            if (errorElement) {
                controlElement.removeChild(errorElement);
            }
        }
    };

    // Validar nombres y apellidos
    const nombreInput = document.querySelector('input[placeholder="Tú Nombre"]');
    const apellidosInput = document.querySelector('input[placeholder="Apellidos"]');
    if (nombreInput && apellidosInput) {
        nombreInput.addEventListener('blur', () => {
            validarCampo(nombreInput, /^[a-zA-Z\s]*$/, 'Ingresa un nombre válido');
        });
        apellidosInput.addEventListener('blur', () => {
            validarCampo(apellidosInput, /^[a-zA-Z\s]*$/, 'Ingresa apellidos válidos');
        });
    }

    // Validar teléfono
    const telefonoInput = document.querySelector('input[placeholder="Número de teléfono"]');
    if (telefonoInput) {
        telefonoInput.addEventListener('blur', () => {
            validarCampo(telefonoInput, /^\d{10}$/, 'Ingresa un número de teléfono válido (10 dígitos)');
        });
    }

    // Validar correo electrónico
    const correoInput = document.querySelector('input[placeholder="Dirección de correo"]');
    if (correoInput) {
        correoInput.addEventListener('blur', () => {
            validarCampo(correoInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Ingresa una dirección de correo válida');
        });
    }

    // Evento submit para validar formulario antes de enviar
    const formElement = document.querySelector('form');
    if (formElement) {
        formElement.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevenir envío por defecto

            // Validar campos antes de enviar
            validarCampo(nombreInput, /^[a-zA-Z\s]*$/, 'Ingresa un nombre válido');
            validarCampo(apellidosInput, /^[a-zA-Z\s]*$/, 'Ingresa apellidos válidos');
            validarCampo(telefonoInput, /^\d{10}$/, 'Ingresa un número de teléfono válido (10 dígitos)');
            validarCampo(correoInput, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Ingresa una dirección de correo válida');

            // Si hay errores, evitar envío del formulario
            const errores = formElement.querySelectorAll('.help.is-danger');
            if (errores.length === 0) {
                alert('Mensaje enviado correctamente');
                formElement.reset(); // Limpiar formulario
            } else {
                alert('Por favor completa correctamente todos los campos');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evitar que el formulario se envíe por defecto
            console.log('Formulario enviado');
            // Lógica para enviar el formulario usando AJAX, etc.
            // Aquí puedes agregar la lógica para enviar los datos del formulario
            // Por ejemplo, puedes hacer una solicitud AJAX al servidor

            // Mostrar mensaje de éxito al enviar el formulario
            alert('Formulario enviado correctamente');
        });
    }
});

// Evento de teclado (keyup) para el campo de búsqueda en about.html
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            const searchTerm = event.target.value;
            console.log('Término de búsqueda:', searchTerm);
            // Agregar lógica para realizar la búsqueda en tiempo real
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const showSkillsButton = document.getElementById('showSkillsButton');
    if (showSkillsButton) {
        let isSkillsVisible = false;
        showSkillsButton.addEventListener('click', () => {
            console.log('Habilidades mostradas');
            // Lógica para mostrar u ocultar las habilidades en la página about.html
            const skillsElement = document.getElementById('skillsSection');
            if (skillsElement) {
                if (isSkillsVisible) {
                    skillsElement.style.display = 'none';
                    isSkillsVisible = false;
                } else {
                    skillsElement.style.display = 'block';
                    isSkillsVisible = true;
                }
            }
        });
    }
});
