// Smooth scrolling for anchor links + active state update (optional)
(function() {
  const navLinks = document.querySelectorAll('.nav-links a, .hero-buttons a[href^="#"], .project-link[href^="#"]');
  
  navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === "#" || targetId === "") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without causing jump
        history.pushState(null, null, targetId);
      }
    });
  });

  // Optional: Add a small console greeting (minimal)
  console.log("Minimalist portfolio — ready.");
})();