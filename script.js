// Mobile menu toggle
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
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
        hiddenProjects.classList.remove('hidden');
        toggleBtn.textContent = 'Contact Information';
    } else {
        hiddenProjects.classList.add('hidden');
        toggleBtn.textContent = 'View All Projects';
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
});

const sentences = [
    "I build AI tools that actually work.",
    "Passionate about AI, robots, code, and making cool things.",
    "Exploring AI, one project at a time.",
    "Eat. Sleep. Code. Repeat",
    "Turning ideas into intelligent systems.",
    "From small scripts to smart robots — I make it all.",
    "Learning. Building. Breaking. Repeating.",
    "I make machines think (kind of).",
    "Engineer by degree, creator by choice.",
    "Code is my toolkit. Curiosity is my fuel."
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
        setTimeout(typeLoop, 50);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeLoop, 30);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            sentenceIndex = (sentenceIndex + 1) % sentences.length;
        }
        setTimeout(typeLoop, 1000);
    }
}

document.addEventListener("DOMContentLoaded", typeLoop);