// Painting data
const paintings = [
    {
        title: "The Void",
        year: "2023",
        medium: "Acrylic and Charcoal on Linen",
        dimensions: "150 x 150 cm",
        description: "A study of absolute silence. The white space is not empty; it is full of what is not said.",
        image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Static Noise",
        year: "2023",
        medium: "Digital Print on Aluminum",
        dimensions: "80 x 120 cm",
        description: "Visualizing the sound of modern anxiety. A chaotic harmony of monochromatic lines.",
        image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Ephemeral",
        year: "2024",
        medium: "Oil and Sand on Canvas",
        dimensions: "100 x 100 cm",
        description: "Texture representing the fleeting nature of time. It changes as the light in the room shifts.",
        image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Structure",
        year: "2024",
        medium: "Mixed Media",
        dimensions: "200 x 100 cm",
        description: "The rigid frameworks we build to protect our fragile egos.",
        image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Decay",
        year: "2024",
        medium: "Oxidized Copper on Wood",
        dimensions: "50 x 50 cm",
        description: "Beautiful destruction. The chemical reaction captured at the moment of total collapse.",
        image: "https://images.unsplash.com/photo-1507842217153-e52879d92c67?q=80&w=1000&auto=format&fit=crop"
    },
    {
        title: "Rebirth",
        year: "2025",
        medium: "Gold Leaf and Ink",
        dimensions: "120 x 120 cm",
        description: "From the ashes of decay, a singular, golden line emerges.",
        image: "https://images.unsplash.com/photo-1642425149556-b6f90e946859?q=80&w=1000&auto=format&fit=crop"
    }
];

// State management
let currentPaintingIndex = 0;

// DOM elements
const navToggle = document.getElementById('navToggle');
const menuOverlay = document.getElementById('menuOverlay');
const introSection = document.getElementById('intro');
const gallerySection = document.getElementById('gallery');
const authorSection = document.getElementById('author');
const artImage = document.getElementById('artImage');
const artTitle = document.getElementById('artTitle');
const artMeta = document.getElementById('artMeta');
const artDescription = document.getElementById('artDescription');
const nextButton = document.getElementById('nextButton');

// Menu toggle
function toggleMenu() {
    menuOverlay.classList.toggle('active');
}

navToggle.addEventListener('click', toggleMenu);

// Hide all sections
function hideAllSections() {
    introSection.classList.remove('active');
    gallerySection.classList.remove('active');
    authorSection.classList.remove('active');
    menuOverlay.classList.remove('active');
}

// Navigate to section
function navigateToSection(sectionId) {
    // Close menu first
    menuOverlay.classList.remove('active');
    
    hideAllSections();
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }
    }, 100);
}

// Start exhibition
function startExhibition() {
    currentPaintingIndex = 0;
    loadPainting(currentPaintingIndex);
    hideAllSections();
    setTimeout(() => {
        gallerySection.classList.add('active');
    }, 200);
}

// Load painting
function loadPainting(index) {
    if (index < 0 || index >= paintings.length) return;
    
    const painting = paintings[index];
    currentPaintingIndex = index;
    
    // Fade out current content
    artImage.style.opacity = '0';
    artTitle.style.opacity = '0';
    artMeta.style.opacity = '0';
    artDescription.style.opacity = '0';
    
    setTimeout(() => {
        // Update content
        artTitle.textContent = painting.title;
        artMeta.innerHTML = `
            <span class="meta-line">${painting.medium}</span>
            <span class="meta-line">${painting.year}</span>
            <span class="meta-line">${painting.dimensions}</span>
        `;
        artDescription.textContent = painting.description;
        
        // Update button text
        if (index === paintings.length - 1) {
            nextButton.textContent = "Meet the Artist";
        } else {
            nextButton.textContent = "Next Work";
        }
        
        // Function to fade in content
        const fadeInContent = () => {
            setTimeout(() => {
                artImage.style.opacity = '1';
                artTitle.style.opacity = '1';
                artMeta.style.opacity = '1';
                artDescription.style.opacity = '1';
            }, 50);
        };
        
        // Set up image loading
        artImage.onload = fadeInContent;
        artImage.onerror = fadeInContent; // Fade in even if image fails to load
        
        // Set image source (this triggers onload if cached, or loads if not)
        artImage.src = painting.image;
        artImage.alt = painting.title;
        
        // If image is already loaded (cached), fade in immediately
        if (artImage.complete && artImage.naturalHeight !== 0) {
            fadeInContent();
        }
    }, 300);
}

// Next painting
function nextPainting() {
    if (currentPaintingIndex < paintings.length - 1) {
        currentPaintingIndex++;
        loadPainting(currentPaintingIndex);
    } else {
        // End of collection -> Go to Author
        navigateToSection('author');
    }
}

// Navigate to specific painting
function navigateToPainting(index) {
    // Close menu first
    menuOverlay.classList.remove('active');
    
    if (index >= 0 && index < paintings.length) {
        hideAllSections();
        loadPainting(index);
        setTimeout(() => {
            gallerySection.classList.add('active');
        }, 200);
    }
}

// Initialize image opacity transitions
artImage.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
artTitle.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
artMeta.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
artDescription.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

// Make functions globally accessible for inline handlers
window.toggleMenu = toggleMenu;
window.navigateToSection = navigateToSection;
window.navigateToPainting = navigateToPainting;
window.startExhibition = startExhibition;
window.nextPainting = nextPainting;


