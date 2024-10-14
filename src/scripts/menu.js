document.addEventListener('astro:page-load', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = navLinks.querySelectorAll('a');
  
    function toggleMenu() {
      const isExpanded = navLinks.classList.toggle('expanded');
      hamburger.setAttribute('aria-expanded', isExpanded);
      
      if (isExpanded) {
        // Set focus to the first link in the menu
        links[0].focus();
      }
    }
  
    hamburger.addEventListener('click', toggleMenu);
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navLinks.classList.contains('expanded')) {
        toggleMenu();
        hamburger.focus();
      }
    });
  
    // Handle focus for the last link
    const lastLink = links[links.length - 1];
    lastLink.addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && !event.shiftKey) {
        if (window.innerWidth <= 636) { // Adjust this value based on your mobile breakpoint
          event.preventDefault();
          hamburger.focus();
        }
      }
    });
  
    // Add event listener for the first link to handle Shift+Tab
    links[0].addEventListener('keydown', (event) => {
      if (event.key === 'Tab' && event.shiftKey) {
        if (window.innerWidth <= 636) {
          event.preventDefault();
          hamburger.focus();
        }
      }
    });
  });