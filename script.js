// 1. Smooth scroll animation for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// 2. Animate project cards on scroll (Fade Up effect)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the CSS class that makes the card visible
            entry.target.classList.add("show");
            // Stop observing once it's visible (optional)
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of card is visible

document.querySelectorAll('.project-card').forEach((el) => observer.observe(el));

// 3. Interactive 3D Hover Effect
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Calculate rotation
        let rotateY = (x - rect.width / 2) / 20;
        let rotateX = -(y - rect.height / 2) / 20;

        // Apply the 3D tilt
        card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.02)`;
    });

    card.addEventListener("mouseleave", () => {
        // Reset smoothly when mouse leaves
        card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)";
    });
});