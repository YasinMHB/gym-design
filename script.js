const hamburger = document.querySelector('.hamburger');
const nav_link = document.querySelector(".mobile-menu .nav-link");
const icons = document.querySelectorAll("i");

console.log("hello")

hamburger.addEventListener("click", function (event) {
    const isVisible = nav_link.getAttribute('data-visible');
    if (isVisible == "true") {
        // qari hiding
        nav_link.setAttribute('data-visible', "false");
        icons[0].setAttribute('data-visible', "true");
        icons[1].setAttribute('data-visible', "false");
    } else if (isVisible == "false") {
        // soo bandhig showing
        nav_link.setAttribute('data-visible', "true");
        icons[0].setAttribute('data-visible', "false");
        icons[1].setAttribute('data-visible', "true");
    }
});
