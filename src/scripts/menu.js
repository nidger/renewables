const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = navLinks.querySelectorAll('a');

hamburger.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks.classList.contains('expanded')) {
        toggleMenu();
        hamburger.focus();
    }
});

function toggleMenu() {
    const isExpanded = navLinks.classList.toggle('expanded');
    hamburger.setAttribute('aria-expanded', isExpanded);
}

// Handle focus for the last link
const lastLink = links[links.length - 1];
lastLink.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && !event.shiftKey) {
        if (window.innerWidth <= 636) { // Adjust this value based on your mobile breakpoint
            event.preventDefault();
            hamburger.focus();
        }
        // Remove the else block to allow default tab behavior on desktop
    }
});

// Function to find the next focusable element (unused in this version)
function findNextFocusableElement(element) {
    const focusableElements = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    let nextElement = element.nextElementSibling;

    while (nextElement) {
        const focusable = nextElement.querySelectorAll(focusableElements);
        if (focusable.length > 0) {
            return focusable[0];
        }
        nextElement = nextElement.nextElementSibling;
    }

    return null;
}