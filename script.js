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
    // const isStarPage = location.pathname.startsWith("/tab");
const isStarPage = starPages.has(location.pathname);

if (isStarPage) {
  document.body.classList.add("theme-stars");
  // If you want a different set of pages to get a different theme:
  // document.body.classList.add("theme-nebula");}
});
