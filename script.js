// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Hero Card 3D Tilt Effect
const heroCard = document.querySelector('.hero-card');

if(heroCard) {
    heroCard.addEventListener('mousemove', (e) => {
        const rect = heroCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xRotation = ((y - rect.height / 2) / rect.height) * 10; // Tilt strength
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
    
    // Remove transition when moving so it doesn't lag
    heroCard.addEventListener('mouseenter', () => {
        heroCard.style.transition = 'none';
    });
}