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
    });
})()
