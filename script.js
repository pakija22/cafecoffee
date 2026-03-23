
    // Select the hamburger icon and the list of links
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    // When the icon is clicked, add/remove the 'active' class
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
