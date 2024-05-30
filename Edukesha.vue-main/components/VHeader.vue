<script setup>
import { onMounted, ref } from "vue";

let menuBtn = ref(null);
let menu = ref(null);
let block = ref(null);
let footer = ref(null);
onMounted(() => {
  console.log(menuBtn);
  menuBtn.value.addEventListener(
    "click",
    function () {
      menuBtn.value.classList.toggle("btn__active");
      menu.value.classList.toggle("references__active");
      block.value.classList.toggle("menu__block__active");
      footer.value.classList.toggle("menu__footer__active");
    },
    false
  );
});
</script>

<template>
  <header>
    <nav class="navigation">
      <div class="container">
        <div class="navigation-wrap">
          <div class="logo"><img src="/Frame 5.png" alt="" /></div>
          <div class="menu__block" ref="block">
            <div class="references" ref="menu">
              <a href="">Возможности</a> <a href="">Как это работает?</a>
            </div>
            <a href="#" class="menu-btn" ref="menuBtn"><span></span></a>
            <div class="menu__footer" ref="footer">
              <p class="menu__footer__top">
                г Сургут, ул Базовая, д. 34, офис 10 <br />
                ОГРН 1238600001200ИНН <br />
                8602309464
              </p>
              <p class="menu__footer__below">ООО Дотсолюшн © 2023</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
