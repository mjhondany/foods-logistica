document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Botón de WhatsApp
    const btnWhatsApp = document.getElementById("btnWhatsApp");

    if (btnWhatsApp) {
        btnWhatsApp.addEventListener("click", function() {
            const numeroTelefonico = "51999999999"; // Cambia por tu número real
            const mensaje = "Hola, me interesa obtener más información y una cotización sobre sus servicios de alimentación.";
            const mensajeCodificado = encodeURIComponent(mensaje);
            window.open(`https://wa.me/${numeroTelefonico}?text=${mensajeCodificado}`, "_blank");
        });
    }

    // 2. Simulación de envío del Formulario Clásico
    const formContacto = document.getElementById("formContacto");

    if (formContacto) {
        formContacto.addEventListener("submit", function(e) {
            e.preventDefault(); // Evita que la página se recargue

            const nombre = document.getElementById("nombre").value;
            const servicio = document.getElementById("servicioInteres").value;

            // Muestra una alerta de confirmación (puedes conectarlo luego a un servicio como EmailJS o backend)
            alert(`¡Gracias por tu mensaje, ${nombre}! Hemos recibido tu consulta sobre el servicio de ${servicio}. Nos pondremos en contacto contigo muy pronto.`);
            
            // Limpiar formulario
            formContacto.reset();
        });
    }

});