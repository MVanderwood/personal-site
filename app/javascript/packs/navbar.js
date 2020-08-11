(() => {
    const burger   = document.querySelector('.burger');
    const navbar   = document.querySelector('.navbar-links');
    const navLinks = document.querySelectorAll('.navbar-links li');

    let navLinksVisible = false

    burger.addEventListener('click', () => {
        navbar.classList.toggle('navbar-links-active');

        navLinks.forEach((link, index) => {
            if(navLinksVisible) {
                link.style.animation = `burgerMenuFadeOut 0.5 ease forwards ${index + 0.5}s`;
            } else {
                link.style.animation = `burgerMenuFadeIn 0.5 ease forwards ${index / 3 + 1.5}s`;
            }
        });
        navLinksVisible = !navLinksVisible

        // Burger Animation
        burger.classList.toggle('toggled')
    });

    document.querySelector('#about-link').addEventListener('click', () => {
        document.querySelector('#about-link a').click();
    });
    document.querySelector('#portfolio-link').addEventListener('click', () => {
        document.querySelector('#portfolio-link a').click();
    });
    document.querySelector('#blog-link').addEventListener('click', () => {
        document.querySelector('#blog-link a').click();
    });
    document.querySelector('#contact-link').addEventListener('click', () => {
        document.querySelector('#contact-link a').click();
    });
})()
