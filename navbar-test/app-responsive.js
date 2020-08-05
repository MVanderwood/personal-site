const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    const navLinks = document.querySelectorAll('.nav-links li');

    let navLinksVisible = false

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if(navLinksVisible) {
                link.style.animation = `navLinkFadeOut 0.5 ease forwards ${index + 0.5}s`;
            } else {
                link.style.animation = `navLinkFadeIn 0.5 ease forwards ${index / 6 + 1.5}s`;
            }
        });
        navLinksVisible = !navLinksVisible

        // Burger Animation
        burger.classList.toggle('toggle')
    });
}

navSlide()