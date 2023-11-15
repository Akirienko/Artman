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

// console.log('activeMenuItem', activeMenuItem.value);


// watch(activeMenuItem, (newValue, oldValue) => {
//   if (newValue) {
//     console.log('activeMenuItem', activeMenuItem.value);
//   } else {
//     console.log('activeMenuItem', activeMenuItem);
//   }
// });

const onSwiper = (swiper) => {
  watch(activeMenuItem, (newValue, oldValue) => {
    if (newValue) {
      changeActiveSlide(activeMenuItem.value);
    }
  });

  function changeActiveSlide(hash) {
    const slides = document.querySelectorAll('.main-slide');
    const index = ref(0);
    console.log('hashName:', hash);

    slides.forEach((slide, i) => {
      console.log('slide.dataset.hash', slide.dataset.hash);
      if (slide.dataset.hash === hash) {
        index.value = i;
        console.log('index', index.value);
      }
    });

    swiper.slideTo(index.value);
  }

  // const activeIndex = ref(swiper.activeIndex)
  // console.log('activeIndex', activeIndex.value);

  // watch(activeIndex.value, (newValue, oldValue) => {
  //   if (newValue) {
  //     console.log('WATCH activeIndex', newValue);

  //     activeMenuItem.value = newIndex
  //   }
  // });

  // swiper.changeActiveSlide = () => {
  //   activeMenuItem.value = newIndex
  // }
  // swiper.on('slideChange', (newIndex) => {
  //   activeMenuItem.value = newIndex
  // });
};



const onSlideChange = (swiper) => {
  console.log(swiper.activeIndex);
  store.setActiveSlideIndex(swiper.activeIndex)
};

</script>

<template>
  <swiper
      :direction="'vertical'"
      :slidesPerView="1"
      :mousewheel="true"
      :parallax= "true"
      :speed="1000"
      :hashNavigation="true"
      :pagination="{
        clickable: true,
      }"
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
      <swiper-slide data-hash="sectionMedia" class="main-slide">
        <SectionMedia class="section" id="sectionMedia" />
      </swiper-slide>
    </swiper>
</template>

<!-- <template>
  <div>
    <div ref="scrollContainer" class="scroll-container">

      <SectionWelcome class="scroll-section" />

      <SectionAbout class="scroll-section" />

      <SectionFeatures class="scroll-section" />

      <SectionMedia class="scroll-section" />
    </div>
  </div>


</template> -->

<style lang="scss" scoped>
.main-slider {
  max-height: 100vh;
  // height: 100px;
  // width: 100%;
}
</style>

<!-- <script setup>
  const sections = [
    { id: '1', active: ref(false) },
    { id: '2', active: ref(false) },
    { id: '3', active: ref(false) },
    { id: '4', active: ref(false) },
  ];

  onMounted(() => {
    if (process.client) {
      window.addEventListener('scroll', handleScroll);
    }
  });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    sections.forEach(section => {
      const target = document.getElementById(section.id);
      if (target.offsetTop <= scrollPosition && target.offsetTop + target.offsetHeight > scrollPosition) {
        section.active.value = true;
      } else {
        section.active.value = false;
      }
    });
  };
</script>

<template>
  <div>
    <div class="scroll-container">
      <SectionWelcome :id="sections[0].id" :active="sections[0].active" />
      <SectionAbout :id="sections[1].id" :active="sections[1].active" />
      <SectionFeatures :id="sections[2].id" :active="sections[2].active" />
      <SectionMedia :id="sections[3].id" :active="sections[3].active" />
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style> -->