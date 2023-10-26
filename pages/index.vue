<template>
  <section class="main">
    <div class="bg-mobile-image">
      <img class="" src="@/assets/image/main/mainBackgroundMobile.webp" alt="artman">
    </div>
    <div class="desk-mobile-image">
      <!-- <img class="wave" src="@/assets/image/main/ParalaxBackWave.webp" alt="wave"> -->
      <div class="wave"></div>

      <img class="artman-desk" src="@/assets/image/main/mainBackgroundDesk.webp" alt="artman">
    </div>
    <div class="main-content container">
        <div class="main-content__left">
          <MainTextComponent>
            <template v-slot:undertitle>
              {{ $t("home_undertitle") }}
            </template>
            <template v-slot:title >
              <!-- CINEMA <span class="text-base">PRODUCER </span> <br>
              <span class="text-base">SIMULATOR</span> IN WORLD OF <br>
              CYBERPUNK <span class="text-base">HOLLYWOOD</span> 2056 -->
              {{ $t("home_title") }}
            </template>
            <template v-slot:subtitle >
              {{ $t("home_subtitle") }}
            </template>
          </MainTextComponent>
          <div class="song">
          </div>
          <div class="store">
            <NuxtLink
              href="#"
              target="_blank"
              class="download-button"
            >
              <img class="" src="@/assets/image/appStore.svg" alt="apple store">
            </NuxtLink>
            <NuxtLink
              href="#"
              target="_blank"
              class="download-button"
            >
              <img class="" src="@/assets/image/googlePlay.svg" alt="google store">
            </NuxtLink>
          </div>
        </div>
        <div class="main-content__right">
          <div class="phone">
            <div class="image">
              <img class="wave" src="@/assets/image/main/IphoneMain.webp" alt="wave">
            </div>
            <div class="store">
              <NuxtLink
                href="#"
                target="_blank"
                class="download-button"
              >
                <img class="" src="@/assets/image/appStore.svg" alt="apple store">
              </NuxtLink>
              <NuxtLink
                href="#"
                target="_blank"
                class="download-button"
              >
                <img class="" src="@/assets/image/googlePlay.svg" alt="google store">
              </NuxtLink>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.desk-mobile-image {
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .wave {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: url('@/assets/image/main/ParalaxBackWave.webp');
      background-repeat: repeat-x;
      background-size: 5000px 100vh;
      background-position: left;
      animation: moveSmoke 10s linear infinite ;
      z-index: -1;
    }
  }
}
@keyframes moveSmoke {
  to {
    background-position: -5000px 0;
  }
}
.store {
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (min-width:760px) {
    justify-content: start;
  }
  .download-button {
    &:first-child {
      margin-right: 20px;
    }
  }
}
.main {
  height: calc(100vh - 60px);
  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    // width: 100%;
    // margin: 0 auto;
    // max-width: 1140px;
    &__left {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
      padding-bottom: 60px;
      .song {
        margin: 40px 0 56px;
        height: 90px;
      }
      .store {
        @media (min-width:1024px) {
          display: none;
        }
      }
      @media (min-width:1024px) {
        justify-content: center;
      }
    }
    &__right {
      display: none;
      @media (min-width:1024px) {
        display: block;
        .phone {
          .image {
            width: 326px;
            height: 672px;
            margin-bottom: 40px;
          }
        }
      }
    }
    @media (min-width:1024px) {
      justify-content: space-around;
    }
  }
}
</style>