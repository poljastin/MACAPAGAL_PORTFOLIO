document.addEventListener("DOMContentLoaded", function() {
    // Hero Title Animation
    const heroTitle = document.getElementById("hero-title");
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroTitle.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 500);

    // Hero Subtitle Animation (Slide in from left)
    const heroSubtitle = document.getElementById("hero-subtitle");
    heroSubtitle.style.opacity = "0";
    heroSubtitle.style.transform = "translateX(-30px)";
    setTimeout(() => {
        heroSubtitle.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroSubtitle.style.opacity = "1";
        heroSubtitle.style.transform = "translateX(0)";
    }, 700);

    // Hero Button Animation (Slide in from right)
    const heroButton = document.getElementById("hero-button");
    heroButton.style.opacity = "0";
    heroButton.style.transform = "translateX(30px)";
    setTimeout(() => {
        heroButton.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroButton.style.opacity = "1";
        heroButton.style.transform = "translateX(0)";
    }, 900);

    // Navbar Scroll Effect
    window.addEventListener("scroll", function() {
        const navbar = document.querySelector(".navbar");
        const navLogo = document.getElementById("nav-logo");
        const navLinks = document.querySelectorAll(".nav-link");

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navLogo.src = "images/logo2.png";
            navLinks.forEach(link => link.style.color = "white");
        } else {
            navbar.classList.remove("scrolled");
            navLogo.src = "images/logo1.png";
            navLinks.forEach(link => link.style.color = "black");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            card.querySelector(".overlay-text").style.opacity = "1";
        });

        card.addEventListener("mouseout", () => {
            card.querySelector(".overlay-text").style.opacity = "0";
        });
    });
});

