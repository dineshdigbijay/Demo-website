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
<script>
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const navLinks = document.querySelector(".nav-links");
    const menuToggle = document.createElement("div");

    menuToggle.innerHTML = "&#9776;";
    menuToggle.style.fontSize = "2rem";
    menuToggle.style.cursor = "pointer";
    menuToggle.style.color = "#ff0000";
    menuToggle.style.display = "none";
    header.querySelector("nav").prepend(menuToggle);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
            navLinks.classList.remove("active");
            menuToggle.style.display = "none";
        } else {
            menuToggle.style.display = "block";
        }
    });

    if (window.innerWidth <= 768) {
        menuToggle.style.display = "block";
    }
});
</script>
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll to sections
    const scrollLinks = document.querySelectorAll('nav a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

