const mainHeader = document.getElementById("main-header");

window.addEventListener("load", () => {
    document.documentElement.style.setProperty("--header-height", `${mainHeader.clientHeight}px`);
});

const mobileNav = document.getElementById("mobile-nav");
const navMenuBtn = document.getElementById("nav-btn");
let navMenuBtnIcon = navMenuBtn.childNodes[0].classList;

navMenuBtn.addEventListener('click', () => {
    if(navMenuBtnIcon.contains("fa-bars")) {
        navMenuBtnIcon.replace("fa-bars", "fa-xmark");

        mobileNav.style.height = "100vh"
        mobileNav.children[1].style.display = "flex";
        mobileNav.children[2].style.display = "flex";
    } else if(navMenuBtnIcon.contains("fa-xmark")) {
        navMenuBtnIcon.replace("fa-xmark", "fa-bars");

        mobileNav.style.height = "auto"
        mobileNav.children[1].style.display = "none";
        mobileNav.children[2].style.display = "none";
    }
});