// Mobile menu toggle
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');   // Tailwind utility
        console.log("Menu toggled");
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            // close mobile menu after click (if it's open)
            if (window.innerWidth < 768 && mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});


// View All Projects toggle
const toggleBtn = document.getElementById('view-all-projects');
const hiddenProjects = document.getElementById('hidden-projects');
const featuredSection = document.getElementById('projects');
const contactSection = document.getElementById('contact');
let showingAll = false;

toggleBtn.addEventListener('click', () => {
    showingAll = !showingAll;

    if (showingAll) {
        hiddenProjects.classList.remove('hidden'); // Show all
        toggleBtn.textContent = 'Contact Information';
    } else {
        hiddenProjects.classList.add('hidden'); // Hide extra
        toggleBtn.textContent = 'View All Projects';
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});


const sentences = [
    "Building intelligent systems for tomorrow.",
    "Creating robots that learn and adapt.",
    "Engineering AI that transforms industries.",
    "Solving real-world problems with code."
];

const el = document.getElementById("typewriter");
let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeLoop() {
    const current = sentences[sentenceIndex];
    const displayText = current.substring(0, charIndex);
    el.textContent = displayText;

    if (!isDeleting && charIndex < current.length) {
        charIndex++;
        setTimeout(typeLoop, 80);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 40);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }
        setTimeout(typeLoop, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeLoop);