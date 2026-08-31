// === SCRIPT AVANZADO PARA FOODS LOGISTICA ===

document.addEventListener('DOMContentLoaded', () => {

    // 1. Control del Menú Hamburguesa para Móviles
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // 2. Configuración de efectos de aparición al hacer scroll (ScrollReveal)
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 200,
        reset: true 
    });

    sr.reveal('.nosotros-contenido', { delay: 300 });
    sr.reveal('.servicios h2, .servicios .subtitulo-servicios', { delay: 200 });
    sr.reveal('.card', { interval: 200 });
    sr.reveal('.testimonios', { delay: 300 });
    sr.reveal('.contacto h2, .contacto p, .form-contacto', { interval: 200 });


    // 3. Funcionalidad del Botón Directo de WhatsApp
    const btnWhatsApp = document.getElementById('btnWhatsApp');
    const btnWhatsAppFlotante = document.getElementById('btnWhatsAppFlotante');

    const numeroWhatsApp = "51978225778"; 
    const mensajePredeterminado = "Hola, estoy interesado en los servicios de alimentación corporativa / catering de Foods Logistica.";
    const enlaceWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajePredeterminado)}`;

    if (btnWhatsApp) {
        btnWhatsApp.addEventListener('click', () => {
            window.open(enlaceWhatsApp, '_blank');
        });
    }

    if (btnWhatsAppFlotante) {
        btnWhatsAppFlotante.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(enlaceWhatsApp, '_blank');
        });
    }


    // 4. Validación y Feedback Mejorado para el Formulario de Correo
    const formCorreo = document.getElementById('formCorreo');
    const mensajeExito = document.getElementById('mensajeExito');

    if (formCorreo && mensajeExito) {
        formCorreo.addEventListener('submit', (e) => {
            // Si usas Formspree, puedes dejar que envíe los datos con normalidad 
            // y mostrar una alerta visual sutil de confirmación:
            setTimeout(() => {
                mensajeExito.style.display = 'block';
                mensajeExito.style.animation = 'fadeIn 0.5s ease-in-out';
            }, 500);
        });
    }

});