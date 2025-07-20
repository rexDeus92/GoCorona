const burger = document.querySelector(".header-burger")
const burgerMenu = document.querySelector(".header-burger-menu")

burger.addEventListener("click", () => {
    burger.classList.toggle("burger-active")
    burgerMenu.classList.toggle("burger-menu-active")
})