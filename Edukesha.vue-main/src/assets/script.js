let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".references");
let block = document.querySelector(".menu__block");
let footer = document.querySelector(".menu__footer");
if (menuBtn) {
  menuBtn.addEventListener(
    "click",
    function () {
      menuBtn.classList.toggle("btn__active");
      menu.classList.toggle("references__active");
      block.classList.toggle("menu__block__active");
      footer.classList.toggle("menu__footer__active");
    },
    false
  );
}

let myswiper = new Swiper(".swiper-container", {
  loop: true,
  slidesPerView: 1,
  mobileFirst: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
});
