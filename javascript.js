document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const icon = button.querySelector('i');

        // Toggle content visibility
        content.classList.toggle('hidden');

        // Rotate icon
        icon.classList.toggle('transform');
        icon.classList.toggle('rotate-180');
    });
});


// Get current year 
document.getElementById("year").textContent = new Date().getFullYear();
