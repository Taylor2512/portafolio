document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded fue disparado");
    const socialLinksContainer = document.getElementById("socialLinks");

    // Datos simulados (reemplaza con tu lógica de carga de datos)
    const data = {
        links: [
            {
                name: "linkedin",
                url: "https://www.linkedin.com/",
            },
            { name: "github", url: "https://github.com/mrivasg" },
            { name: "mail", url: "mailto:milton.rivas@uees.edu.ec" },
        ],
    };

    // Iterar sobre los enlaces del archivo JSON simulado
    data.links.forEach((link) => {
        // Crear un elemento <a> para cada enlace
        const anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.className = "footer__social-link";

        // Crear un elemento <i> (ícono) dentro del enlace
        const icon = document.createElement("i");
        icon.className = "ti ti-" + link.name.toLowerCase();
        anchor.appendChild(icon);

        // Crear un elemento <span> para el nombre del ícono
        const text = document.createElement("span");
        text.textContent = link.name;
        anchor.appendChild(text);

        // Agregar el elemento <a> al contenedor socialLinksContainer
        socialLinksContainer.appendChild(anchor);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOMContentLoaded fue disparado');

    // Seleccionar el contenedor de redes
    const redesContainer = document.querySelector('.redes');

    // Datos simulados (reemplaza con tu lógica de carga de datos)
    const data = {
        links: [
            {
                name: "linkedin",
                url: "https://www.linkedin.com/",
            },
            { name: "github", url: "https://github.com/mrivasg" },
            { name: "mail", url: "mailto:milton.rivas@uees.edu.ec" },
        ],
    };

    // Iterar sobre los enlaces del objeto 'data'
    data.links.forEach((link) => {
        // Crear un elemento <a> para cada enlace
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.className = 'redes__link'; // Asignar la clase adecuada

        // Crear un elemento <i> (ícono) dentro del enlace
        const icon = document.createElement('i');
        icon.className = 'ti ti-' + link.name.toLowerCase();
        anchor.appendChild(icon);


        // Agregar el elemento <a> al contenedor de redes (redesContainer)
        redesContainer.appendChild(anchor);
    });
});
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    } else {
        sidebar.classList.add('active');
    }
}