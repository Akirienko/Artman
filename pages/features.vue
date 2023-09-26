<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Mousewheel, Pagination, EffectCreative, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';

const sliderContent = [
  {
    title: "RECRUIT A CREW",
    subtitle: "Every choice matters, wisely selection of director, cast, composer, will be the key to a successful movi",
    image: "features1"
  },
  {
    title: "ENHANCE YOUR MOVIE",
    subtitle: "With the help of a large talent tree, purchase movie improvements to turn it into a masterpiece",
    image: "features2"
  },
  {
    title: "Global community",
    subtitle: "The world respond to every action, stay friendly and you will gather an army of loyal fans",
    image: "features3"
  },
  {
    title: "one artist story",
    subtitle: "Discover the backstory of the main characters, get to the culmination of Artman's creative journey ",
    image: "features4"
  },
]


const modules = [Mousewheel, Pagination, EffectCreative, Parallax];

// const windowInnerHeight = ref();

// onMounted(() => {
//   windowInnerHeight.value = window.screen.height;
//   console.log(windowInnerHeight.value);
// });

</script>

<template>
  <!-- <section class="feater" :style="`height:${windowInnerHeight}px`"> -->
  <section class="feater">
    <div class="feater-background">
      <img src="@/assets/image/features/backgroundFeatures.webp" alt="features background">
    </div>
    <swiper
      :slidesPerView="1"
      :mousewheel="true"
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
          <img :src="`/_nuxt/assets/image/features/${slide.image}.png`" :alt="slide.title">
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
    <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :mousewheel="true"
      :parallax= "true"
      :effect="'creative'"
      :speed="1000"
      :creativeEffect="{
        prev: {
          translate: [0, '-50%', 0],
        },
        next: {
          translate: [0, '50%', 0],
        },
      }"

      :modules="modules"
      class="desktopSlider container"
    >
      <swiper-slide>
        <div class="left">
          <div class="slide-img">
            <img src="@/assets/image/features/features1.png" alt="features card">
          </div>
          <div class="slide-text">
            <h3>
              RECRUIT A CREW
            </h3>
            <img src="@/assets/image/featuresSeparator.svg" alt="">
            <p>
              Every choice matters, wisely selection of director, cast, composer, will be the key to a successful movi
            </p>
          </div>
        </div>
        <div class="right">
          <div class="slide-img">
            <img src="@/assets/image/features/features2.png" alt="features card">
          </div>
          <div class="slide-text">
            <h3>
              ENHANCE YOUR MOVIE
            </h3>
            <img src="@/assets/image/featuresSeparator.svg" alt="">
            <p>
              With the help of a large talent tree, purchase movie improvements to turn it into a masterpiece
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="left">
          <div class="slide-img">
            <img src="@/assets/image/features/features3.png" alt="features card">
          </div>
          <div class="slide-text">
            <h3>
              Global community
            </h3>
            <img src="@/assets/image/featuresSeparator.svg" alt="">
            <p>
              The world respond to every action, stay friendly and you will gather an army of loyal fans
            </p>
          </div>
        </div>
        <div class="right">
          <div class="slide-img">
            <img src="@/assets/image/features/features4.png" alt="features card">
          </div>
          <div class="slide-text">
            <h3>
              one artist story
            </h3>
            <img src="@/assets/image/featuresSeparator.svg" alt="">
            <p>
              Discover the backstory of the main characters, get to the culmination of Artman's creative journey
            </p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<style lang="scss" scoped>

.feater {
  height: calc(100vh - 60px);
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
  .desktopSlider {
    display: none;
    @media (min-width:768px) {
      display: block;
      max-width: 1600px;
      padding: 0 20px;
      width: 100%;
      height: 100%;
      .swiper-slide {
        display: flex;
        .left {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: ease-out .9s;
          opacity: 0;
        }
        .right {
          flex: 1 1 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: ease-out .9s;
          opacity: 0;
        }
        &.swiper-slide-prev {
          .left {
            transform: translateY(-600px);
          }
          .right {
            transform: translateY(-600px);
          }
        }
        &.swiper-slide-next {
          .left {
            transform: translateY(400px);
          }
          .right {
            transform: translateY(400px);
          }
        }
        &.swiper-slide-active {
          .left {
            transform: translateY(0);
            opacity: 1;
          }
          .right {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
  }

  .swiper-slide {
    .slide-img {
      display: flex;
      justify-content: center;
      img {
        width: 280px;
        @media (min-width:1260px) {
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
    // height: 100%;

    //// alaing center content in slider
    height: auto;
    padding-bottom: 30px;
    @media (min-width:768px) {
      display: none;
    }
  }
}


</style>