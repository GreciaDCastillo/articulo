document.addEventListener("DOMContentLoaded", function () {
    const escenarioIframe = document.querySelector(".escenario-iframe");
    const escenario2 = document.querySelector(".escenario-2");
    const escenario3 = document.querySelector(".escenario-3");

    // Escuchar mensajes del iframe
    window.addEventListener('message', function (event) {
        if (event.data === 'aceptarAdvertencia') {
            mostrarEscenario(escenario2);
            mostrarEscenario(escenario3);
        }
    });

    function mostrarEscenario(escenario) {
        escenario.classList.add("visible");
    }
});
