<script setup>
const { t, locale } = useI18n();

const sliderContentItem = [
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

</script>

<template>
  <section class="features-second">
    <div class="features-background">
      <img src="@/assets/image/features/backgroundFeatures.webp" alt="features background">
      <img class="circles" src="@/assets/image/circlesFeatures.svg" alt="circles">
    </div>
    <div class="features-wrapper container">
      <div class="left right-bar-animation">
        <div class="slide-img">
          <img src="/features3.png" alt="features card">
        </div>
        <div class="slide-text">
          <h3>
            {{ t("features_title_3") }}
          </h3>
          <img src="@/assets/image/featuresSeparator.svg" alt="">
          <p>
            {{ t("features_description_3") }}
          </p>
        </div>
      </div>
      <div class="right left-bar-animation">
        <div class="slide-img">
          <img src="/features4.png" alt="features card">
        </div>
        <div class="slide-text">
          <h3>
            {{ t("features_title_4") }}
          </h3>
          <img src="@/assets/image/featuresSeparator.svg" alt="">
          <p>
            {{ t("features_description_4") }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.features-second {
  width: 100vw;
  display: flex;
  align-items: center;
  .features-background {
    position: absolute;
    width: 100%;
    height: 100%;
    img {
      object-position: left;
    }
  }
  .features-wrapper {
    display: flex;
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
    @media (min-width:1024px) {
      padding-top: 30px;
    }
  }
}


</style>