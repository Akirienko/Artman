<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { useActiveSlide } from '@/store/activeSlide'
import { storeToRefs } from 'pinia'

const modules = [Mousewheel, Pagination, EffectCreative, Parallax];
const store = useActiveSlide();
const { activeMenuItem } = storeToRefs(store)

const onSwiper = (swiper) => {
  watch(activeMenuItem, (newValue, oldValue) => {
    if (newValue) {
      changeActiveSlide(activeMenuItem.value);
    }
  });

  function changeActiveSlide(hash) {
    const slides = document.querySelectorAll('.main-slide');
    const index = ref(0);

    slides.forEach((slide, i) => {
      if (slide.dataset.hash === hash) {
        index.value = i;
      }
    });

    swiper.slideTo(index.value);
  }
};

const blackBackground = ref(false)

const onSlideChange = (swiper) => {
  store.setActiveSlideIndex(swiper.activeIndex)
  blackBackground.value = true
  setTimeout(() => {
    blackBackground.value = false;
  }, 1000);
};
</script>

<template>
  <div :class="`black-background ${blackBackground ? 'active' : ''}`">
    <img src="@/assets/image/preloader/leftFace.png" alt="preloader artman">
    <img src="@/assets/image/preloader/rightFace.png" alt="preloader artman">
  </div>
  <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :mousewheel="true"
      :parallax= "true"
      :speed="2000"
      :hashNavigation="true"
      :modules="modules"
      class="main-slider"

      @swiper="onSwiper"
      @slideChange="onSlideChange"

    >
      <swiper-slide data-hash="sectionWelcome" class="main-slide">
        <SectionWelcome class="section" id="sectionWelcome" />
      </swiper-slide>
      <swiper-slide data-hash="sectionAbout" class="main-slide">
        <SectionAbout class="section" id="sectionAbout" />
      </swiper-slide>
      <swiper-slide data-hash="sectionFeatures" class="main-slide">
        <SectionFeatures class="section" id="sectionFeatures" />
      </swiper-slide>
      <swiper-slide class="main-slide desktop">
        <SectionFeaturesTwo />
      </swiper-slide>
      <swiper-slide data-hash="sectionMedia" class="main-slide">
        <SectionMedia class="section" id="sectionMedia" />
      </swiper-slide>
    </swiper>
</template>

<style lang="scss" scoped>
.main-slider {
  max-height: 100vh;
}
.black-background {
  position: absolute;
  width: 100vw;
  height: 100vh;
  transition: all 1s;
  opacity: 0;
  z-index: -1;
  background: linear-gradient(0deg, #171A22 0%, #171A22 100%), #FFF;
  &.active {
    z-index: 999999;
    opacity: 1;
  }
  .preloader-logo {
    position: absolute;
    top: 50%;
    left: 50% !important;
    transform: translate(-50%, -50%);
    object-fit: contain;
    width: 90vw;
    height: auto;
    animation: opacity 2s linear;
    max-width: 700px;
  }
  img {
    position: absolute;
    height: 500px;
    object-fit: contain;
    width: auto;
    top: 0;
    @media (min-width: 1024px) {
      height: 100vh;
    }
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
}
.desktop {
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
}
</style>