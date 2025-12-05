// 1. Mobile Menu Auto-Close
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navMenu');
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false});

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if(menuToggle.classList.contains('show')){
            bsCollapse.hide();
        }
    });
});

// 2. Hero Card 3D Tilt Effect
const heroCard = document.querySelector('.hero-card');

if(heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 10; 
        const yRotation = ((x - rect.width / 2) / rect.width) * 10;

        heroCard.style.transform = `
            perspective(1000px)
            rotateX(${ -xRotation }deg)
            rotateY(${ yRotation }deg)
            scale3d(1.02, 1.02, 1.02)`;
    });

    heroCard.addEventListener('mouseleave', () => {
        heroCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        heroCard.style.transition = 'transform 0.5s ease';
    });
    
    heroCard.addEventListener('mouseenter', () => {
        heroCard.style.transition = 'none';
    });
}