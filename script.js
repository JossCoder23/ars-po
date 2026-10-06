// --- LÓGICA PARA TABS (ESCRITORIO) ---
const tabBtns = document.querySelectorAll('.tab-btn');
const cardSections = document.querySelectorAll('.card-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover 'active' de todos los tabs y tarjetas
        tabBtns.forEach(t => t.classList.remove('active'));
        cardSections.forEach(c => c.classList.remove('active-tab'));

        // Añadir 'active' al presionado y su contenido
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active-tab');
    });
});

// --- LÓGICA PARA CARRUSEL (MÓVIL) ---
const dotContainers = document.querySelectorAll('.mobile-dots');

dotContainers.forEach(container => {
    const dots = container.querySelectorAll('.dot');
    const trackId = container.getAttribute('data-target-track');
    const track = document.getElementById(trackId);

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            // Actualizar puntos
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Mover el slider usando transformtranslateX
            const index = dot.getAttribute('data-index');
            const translation = index * 50; // 50% del track (que es 200%) mueve 1 slide
            track.style.transform = `translateX(-${translation}%)`;
        });
    });
});