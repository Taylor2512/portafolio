document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fue disparado');
    const socialLinksContainer = document.getElementById('socialLinks');

    // Cargar el archivo appSettings.json
    fetch('appSettings.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos cargados:', data);
            // Iterar sobre los enlaces del archivo JSON
            data.links.forEach(link => {
                console.log('Creando enlace para:', link.name);
                // Crear un elemento <a> para cada enlace
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.className = 'footer__social-link ti ti-' + link.name.toLowerCase();
                anchor.textContent = link.name;

                // Agregar el elemento <a> al contenedor socialLinksContainer
                socialLinksContainer.appendChild(anchor);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
});
