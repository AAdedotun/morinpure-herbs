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


// Menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("[data-collapse-toggle='mobile-menu-2']");
    const menu = document.getElementById("mobile-menu-2");

    menuButton.addEventListener("click", () => {
        const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("hidden"); // Hide/show the menu
    });

    // Ensure menu starts hidden on load
    menu.classList.add("hidden");
});
