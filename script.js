// Simple console log to show the script is working
console.log("CyberPixel Portfolio loaded!");

// This could be expanded with simple animations or interactions
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.gallery-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // --- Add starry background for /tab/ pages ---
    if (location.pathname.startsWith("/portfolio/tab/")) {
        document.body.classList.add("theme-stars");
        console.log("Starry background applied for /tab/ page");
    }
});
