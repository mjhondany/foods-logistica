// === INTERACTIVIDAD PARA FOODS LOGISTICA ===

document.addEventListener('DOMContentLoaded', () => {
    
    // Tu número real configurado
    const numeroTelefono = "51978225778"; 

    // 1. Botón de WhatsApp Principal (en sección contacto)
    const btnWhatsApp = document.getElementById('btnWhatsApp');
    if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', () => {
            const mensaje = "Hola, estoy interesado en los servicios de alimentación corporativa de FOODS LOGISTICA.";
            const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
            window.open(url, '_blank');
        });
    }

    // 2. Botón Flotante de WhatsApp (siempre visible en la esquina)
    const btnWhatsAppFlotante = document.getElementById('btnWhatsAppFlotante');
    if (btnWhatsAppFlotante) {
        btnWhatsAppFlotante.addEventListener('click', (e) => {
            e.preventDefault();
            const mensajeFlotante = "Hola, deseo realizar una consulta sobre los menús y servicios de FOODS LOGISTICA.";
            const urlFlotante = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensajeFlotante)}`;
            window.open(urlFlotante, '_blank');
        });
    }

    // 3. Envío del Formulario de Correo por Detrás (AJAX sin cerrar la página)
    const formCorreo = document.getElementById('formCorreo');
    const mensajeExito = document.getElementById('mensajeExito');

    if (formCorreo) {
        formCorreo.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que la página se recargue o se cierre
            
            const btnEnviar = document.getElementById('btnEnviarCorreo');
            btnEnviar.textContent = "Enviando...";
            btnEnviar.disabled = true;

            const datosFormulario = new FormData(formCorreo);

            try {
                const respuesta = await fetch(formCorreo.action, {
                    method: 'POST',
                    body: datosFormulario,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (respuesta.ok) {
                    formCorreo.reset();
                    mensajeExito.style.display = 'block'; // Muestra el mensaje bonito de éxito
                    btnEnviar.textContent = "✉️ Enviar Cotización por Correo";
                    btnEnviar.disabled = false;

                    // Oculta el mensaje de éxito después de 6 segundos
                    setTimeout(() => {
                        mensajeExito.style.display = 'none';
                    }, 6000);
                } else {
                    alert('Hubo un error al enviar el correo. Por favor, intenta de nuevo o escríbenos por WhatsApp.');
                    btnEnviar.textContent = "✉️ Enviar Cotización por Correo";
                    btnEnviar.disabled = false;
                }
            } catch (error) {
                alert('Error de conexión. Verifica tu internet e inténtalo de nuevo.');
                btnEnviar.textContent = "✉️ Enviar Cotización por Correo";
                btnEnviar.disabled = false;
            }
        });
    }
});