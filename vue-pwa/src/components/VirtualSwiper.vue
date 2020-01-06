<template>
  <md-card>
    <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption" ref="mySwiper">
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>
  </md-card>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper } from "vue-awesome-swiper";

export default {
  components: {
    swiper
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction"
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        virtual: {
          slides: (function() {
            const slides = [];
            for (let i = 0; i < 600; i += 1) {
              slides.push("Slide " + (i + 1));
            }
            return slides;
          })()
        }
      }
    };
  }
};
</script>
