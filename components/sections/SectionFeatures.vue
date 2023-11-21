<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
const { t, locale } = useI18n();

const sliderContentItem = [
  {
    title: "features_title_1",
    subtitle: "features_description_1",
    image: "features1"
  },
  {
    title: "features_title_2",
    subtitle: "features_description_2",
    image: "features2"
  },
  {
    title: "features_title_3",
    subtitle: "features_description_3",
    image: "features3"
  },
  {
    title: "features_title_4",
    subtitle: "features_description_4",
    image: "features4"
  },
]

const sliderContent = ref([]);

onMounted(() => {
  sliderContent.value = sliderContentItem.map(item => ({
    title: t(item.title),
    subtitle: t(item.subtitle),
    image: item.image,
  }));
});

const modules = [Mousewheel, Pagination, EffectCreative, Parallax];

</script>

<template>
  <section class="feater">
    <div class="feater-background">
      <img src="@/assets/image/features/backgroundFeatures.webp" alt="features background">
      <img class="circles" src="@/assets/image/circlesFeatures.svg" alt="circles">
    </div>
    <swiper
      :slidesPerView="1"
      :mousewheel="false"
      :effectFade="true"
      :modules="modules"
      :pagination="{
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class='${className} mobile-pagination'>
              <svg width:'5' height='4' viewBox='0 0 5 4' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M0.5 2L2.5 0L4.5 2L2.5 4L0.5 2Z' fill='#4A525F'/>
              </svg>
              <svg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path d='M4.5 6L6.5 4L8.5 6L6.5 8L4.5 6Z' fill='url(#paint0_linear_2_2176)'/>
                <path d='M1.5 3.8L6.5 0.5L11.5 3.8V8.2L6.5 11.5L1.5 8.2V3.8Z' stroke='#ECF7FF' stroke-width='0.5'/>
                <defs>
                <linearGradient id='paint0_linear_2_2176' x1='6.5' y1='4' x2='6.5' y2='8' gradientUnits='userSpaceOnUse'>
                <stop stop-color='#75BE36'/>
                <stop offset='1' stop-color='#14650E'/>
                </linearGradient>
                </defs>
              </svg>
              </span>`
          },
      }"
      class="mobileSlider container"
    >
      <swiper-slide v-for="slide in sliderContent" data-swiper-parallax-duration="4000"
        data-swiper-parallax-opacity="0.5">
        <div class="slide-img">
          <img :src="`~/assets/image/features/${slide.image}.png`" :alt="slide.title">
        </div>
        <div class="slide-text">
          <h3>
            {{ slide.title }}
          </h3>
          <img src="@/assets/image/featuresSeparator.svg" alt="">
          <p>
            {{ slide.subtitle }}
          </p>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Desktop -->
    <div class="features-wrapper container">
      <div class="left right-bar-animation">
        <div class="slide-img">
          <img src="@/assets/image/features/features1.png" alt="features card">
        </div>
        <div class="slide-text">
          <h3>
            {{ t("features_title_1") }}
          </h3>
          <img src="@/assets/image/featuresSeparator.svg" alt="">
          <p>
            {{ t("features_description_1") }}
          </p>
        </div>
      </div>
      <div class="right left-bar-animation">
        <div class="slide-img">
          <img src="@/assets/image/features/features2.png" alt="features card">
        </div>
        <div class="slide-text">
          <h3>
            {{ t("features_title_2") }}
          </h3>
          <img src="@/assets/image/featuresSeparator.svg" alt="">
          <p>
            {{ t("features_description_2") }}
          </p>
        </div>
      </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.feater {
  width: 100vw;
  display: flex;
  align-items: center;
  &-background {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      object-position: left;
    }
  }
  .features-wrapper {
    display: none;
    max-width: 1600px;
    padding: 0 20px;
    width: 100%;
    height: 100%;
    .left {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .right {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    @media (min-width:1024px) {
      display: flex;
    }
  }

  .swiper-slide, .features-wrapper {
    .slide-img {
      display: flex;
      justify-content: center;
      img {
        width: 280px;
        @media (min-width:1260px) {
          width: 320px;
        }
        @media (min-width:1640px) {
          width: 480px;
        }
      }
    }
    .slide-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        margin-bottom: 0;
        font-size: 19px;
        letter-spacing: 1.9px;
        text-transform: uppercase;
        @media (min-width:1260px) {
          font-size: 24px;
          letter-spacing: 2.4px;
        }
      }
      img {
        max-width: 320px;
      }
      p {
        margin-top: 0;
        max-width: 280px;
        text-align: center;
        line-height: 180%;
        letter-spacing: 1.7px;
        opacity: .7;
        @media (min-width:1260px) {
          font-size: 24px;
          letter-spacing: 2.1px;
          max-width: 500px;
        }
      }
    }
  }

  .mobileSlider {
    width: 100%;
    height: auto;
    padding-bottom: 30px;
    @media (min-width:768px) {
      .slide-img {
      img {
        width: 420px;
      }
    }
    }
    @media (min-width:1024px) {
      display: none;
    }
  }
  @media (min-width:1024px) {
    padding-top: 30px;
  }
}


</style>