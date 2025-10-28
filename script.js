// Gallery data
const projects = [
  {
    title: "Neon Cityscape",
    type: "3D",
    description: "Futuristic city with holographic advertisements",
    image: "http://static.photos/cityscape/640x360/1"
  },
  {
    title: "Dimensional Shift",
    type: "4D",
    description: "Interactive time-based installation",
    image: "http://static.photos/abstract/640x360/2"
  },
  {
    title: "Cyber Flora",
    type: "2D",
    description: "Digital painting series of bioluminescent plants",
    image: "http://static.photos/nature/640x360/3"
  },
  {
    title: "Hologram Interface",
    type: "3D",
    description: "AR interface concept for smart cities",
    image: "http://static.photos/technology/640x360/4"
  },
  {
    title: "Temporal Distortion",
    type: "4D",
    description: "School project exploring time manipulation",
    image: "http://static.photos/science/640x360/5"
  },
  {
    title: "Pixel Rebellion",
    type: "2D",
    description: "Retro-futurism artwork series",
    image: "http://static.photos/vintage/640x360/6"
  }
];

// Populate gallery
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('#gallery .grid');
  
  if (gallery) {
    projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card bg-cyberblack rounded-lg overflow-hidden relative group';
      card.innerHTML = `
        <div class="relative h-64 overflow-hidden">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 class="text-2xl font-bold mb-1">${project.title}</h3>
            <span class="inline-block px-2 py-1 bg-cyberpurple text-xs rounded-full mb-2">${project.type}</span>
            <p class="text-sm">${project.description}</p>
          </div>
        </div>
      `;
      gallery.appendChild(card);
    });
  }
});

// Typewriter effect for console-like elements
function typeWriter(element, text, speed = 50) {
  if (!element) return;
  
  let i = 0;
  element.textContent = '';
  
  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  
  typing();
}

// Initialize typewriter effects
document.addEventListener('DOMContentLoaded', () => {
  const consoleElements = document.querySelectorAll('.console-text');
  consoleElements.forEach(el => {
    typeWriter(el, el.dataset.text);
  });
});
