// === INTERACTIVIDAD PARA FOODS LOGISTICA ===

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Botón de WhatsApp Principal
    const btnWhatsApp = document.getElementById('btnWhatsApp');
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', () => {
            // Reemplaza el número de abajo con tu número real de WhatsApp (incluyendo código de país, ejemplo: 51999999999)
            const numeroTelefono = "51999999999"; 
            const mensaje = "Hola, estoy interesado en los servicios de alimentación corporativa de FOODS LOGISTICA.";
            const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
    }

    // 2. Manejo del Formulario de Contacto
    const formContacto = document.getElementById('formContacto');
    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue

            const nombre = document.getElementById('nombre').value;
            const servicio = document.getElementById('servicioInteres').value;
            const detalle = document.getElementById('mensaje').value;

            // Creamos un mensaje dinámico para WhatsApp con los datos del formulario
            const numeroTelefono = "51999999999"; // Cambia por tu número real
            const textoMensaje = `Hola, mi nombre es ${nombre}. Me interesa el servicio de ${servicio}. Detalles: ${detalle}`;
            const urlForm = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoMensaje)}`;

            // Redirige al usuario a WhatsApp con su mensaje listo
            window.open(urlForm, '_blank');
            
            // Limpia el formulario
            formContacto.reset();
            alert('¡Gracias por tu mensaje! Te estamos redirigiendo a WhatsApp para atenderte de inmediato.');
        });
    }
});