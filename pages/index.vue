<script setup>

const animating = ref(false);

onMounted(() => {
  playAnimation();
});

function playAnimation() {
  animating.value = true;
  setTimeout(() => {
    animating.value = false;
    setTimeout(playAnimation, 4000);
  }, 2500);
}

</script>

<template>
  <section class="main">
    <div class="bg-mobile-image">
      <img class="" src="@/assets/image/main/mainBackgroundMobile.webp" alt="artman">
    </div>
    <div class="desk-mobile-image">
      <!-- <img class="wave" src="@/assets/image/main/ParalaxBackWave.webp" alt="wave"> -->
      <div class="wave"></div>

      <img src="@/assets/image/main/Lightning.webp" class="lightning" :class="{ animate: animating }" alt="lightning">

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
            <img src="@/assets/image/circleBackground2.svg" class="phone-circle" :class="{ animate: animating }" alt="about artman">
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
    z-index: 1;
    .wave {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: url('@/assets/image/main/ParalaxBackWave.webp');
      background-repeat: repeat-x;
      background-size: 5000px 100vh;
      background-position: left;
      animation: moveSmoke 7s linear infinite ;
      z-index: -1;
    }
    .lightning {
      position: absolute;
      z-index: 1;
      object-fit: contain;
      width: 900px;
      right: 0;
      animation: disappear 1s ease-in-out forwards;
    }
  }
}

.lightning.animate {
  animation: lightning 2s linear;
}


@keyframes disappear {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes lightning {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes moveSmoke {
  to {
    background-position: -5000px 0;
  }
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}

@keyframes rotateBack {
  0% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
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
    z-index: 1;
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
          .phone-circle {
            width: 488px;
            height: 488px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
            animation: rotateBack 2s ease-in-out forwards;
            &.animate {
              animation: rotate 2s linear;
            }
          }
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