// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Animate hamburger to X
        const spans = menuToggle.querySelectorAll('span');
        spans.forEach(span => {
            span.classList.toggle('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove('active');
            
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.remove('active');
            });
        }
    });
});

// Add animation to hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const spans = menuToggle.querySelectorAll('span');
    
    menuToggle.addEventListener('click', function() {
        if (spans[0].classList.contains('active')) {
            // Animate to hamburger
            spans[0].style.transform = 'rotate(0) translateY(0)';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'rotate(0) translateY(0)';
        } else {
            // Animate to X
            spans[0].style.transform = 'rotate(45deg) translateY(9px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-9px)';
        }
    });
});