const hamMenu = document.querySelector(".ham-menu");
const navBarMobile = document.querySelector(".nav__bar__mobile");
hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  navBarMobile.classList.toggle("active");
});
