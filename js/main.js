const hambuger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-nav");

hambuger.addEventListener("click", () => {
    hambuger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

document.querySelectorAll(".mobile-nav-link").forEach(n => n.addEventListener("click", () => {
    hambuger.classList.remove('active');
    mobileMenu.classList.remove('active');
}));


// Token: b2169ad0-5fdd-4d27-b78c-196cb5f99cd3

