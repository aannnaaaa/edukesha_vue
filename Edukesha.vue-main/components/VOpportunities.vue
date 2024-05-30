<script setup>
import Swiper from "swiper";
import { onMounted } from "vue";
import { Pagination } from "swiper/modules";
onMounted(() => {
  const swiper = new Swiper(".swiper-container", {
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <section class="opportunities">
    <h2>Возможности</h2>
    <div class="swiper-container mobile">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slider-card" id="card-1">
            <img src="/sms.png" alt="" />
            <h3>Общение с классом</h3>
            <p>
              Видеосвязь <br />
              Чат с классом
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-card" id="card-2">
            <img src="/komp.png" alt="" />
            <h3>Проведение занятий</h3>
            <p>
              Презентация файлов <br />
              Демонстрация экрана
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-card" id="card-1">
            <img src="/point.png" alt="" />
            <h3>Посещаемость</h3>
            <p>
              Автоматическое <br />
              отслеживание <br />
              присутствующих
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slider-card" id="card-2">
            <img src="/time.png" alt="" />
            <h3>История занятий</h3>
            <p>Материалы урока</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <div class="container desktop">
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
          <div class="opportunities__card" id="card-1">
            <img src="/sms.png" alt="" />
            <h3>Общение с классом</h3>
            <p>
              Видеосвязь <br />
              Чат с классом
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
          <div class="opportunities__card" id="card-2">
            <img src="/komp.png" alt="" />
            <h3>Проведение занятий</h3>
            <p>
              Презентация файлов <br />
              Демонстрация экрана
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
          <div class="opportunities__card" id="card-1">
            <img src="/point.png" alt="" />
            <h3>Посещаемость</h3>
            <p>
              Автоматическое <br />
              отслеживание <br />
              присутствующих
            </p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 mb-4">
          <div class="opportunities__card" id="card-2">
            <img src="/time.png" alt="" />
            <h3>История занятий</h3>
            <p>Материалы урока</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
