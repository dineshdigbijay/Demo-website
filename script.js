// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav .nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = '#ff0000'; // Highlight invalid inputs
        } else {
            input.style.borderColor = '#666'; // Reset border color for valid inputs
        }
    });

    if (!isValid) {
        e.preventDefault(); // Prevent form submission if invalid
        alert('Please fill out all fields.');
    }
});
