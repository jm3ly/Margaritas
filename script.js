document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjust scroll offset for header height
                behavior: "smooth"
            });
        });
    });

    // Highlight the active navigation link on scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav ul li");

    window.addEventListener("scroll", function() {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; // Adjust scroll offset for header height
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        navItems.forEach(li => {
            li.classList.remove("active");
            if (li.querySelector("a").getAttribute("href").substring(1) === current) {
                li.classList.add("active");
            }
        });
    });
});
