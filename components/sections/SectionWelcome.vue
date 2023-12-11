<script setup>
import { useAudioStore } from '@/store/audio'
import { useLoaded } from '@/store/preloader'
import { storeToRefs } from 'pinia'

const storeLoad = useLoaded();
const { isLoaded } = storeToRefs(storeLoad)

const store = useAudioStore();
const { isPlaying, currentTime, fullTime } = storeToRefs(store)


const animating = ref(false);
const loadingPage = ref(false)

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

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}

</script>

<template>
  <section class="main">
    <div class="bg-mobile-image">
      <img class="" src="@/assets/image/main/mainBackgroundMobile.webp" alt="artman">
    </div>
    <div class="desk-mobile-image">
      <div class="wave"></div>

      <img src="@/assets/image/main/Lightning.webp" class="lightning" :class="{ animate: animating }" alt="lightning">

      <img class="artman-desk" src="@/assets/image/main/mainBackgroundDesk.webp" alt="artman">


    </div>
    <img class="circles" src="@/assets/image/circlesMain.svg" alt="circles">

    <div class="main-content container">
        <div :class="`main-content__left ${isLoaded ? 'left-animation' : ''}`">
          <MainTextComponent>
            <template v-slot:image>
              <img class="a-symbol" src="@/assets/image/aSymbol.svg" alt="a">
            </template>
            <template v-slot:undertitle>
              {{ $t("home_undertitle") }}
            </template>
            <template v-slot:title >
              {{ $t("home_title_bold") }} <br>
              <span class="text-base">{{ $t("home_title") }}</span>
              {{ $t("home_title_bold_2") }}
              <span class="text-base">{{ $t("home_title_2") }}</span>
              {{ $t("home_title_bold_3") }}
            </template>
            <template v-slot:subtitle >
              {{ $t("home_subtitle") }}
            </template>
          </MainTextComponent>
          <div class="song">
            <button
              class="play-button"
              @click="isPlaying ? store.pauseSong() : store.playSong()"
            >
              <span v-if="isPlaying">
                <img class="" src="@/assets/image/main/pauseMusic.svg" alt="pause button">
                <img class="" src="@/assets/image/main/pauseMusicHover.svg" alt="pause button hover">
              </span>
              <span v-else>
                <img class="" src="@/assets/image/main/playMusic.svg" alt="play button">
                <img class="" src="@/assets/image/main/playMusicHover.svg" alt="play button hover">
              </span>
            </button>
            <div class="song-time">
              <span>{{ formatTime(currentTime) }}</span>
              /
              {{ formatTime(fullTime) }}
            </div>
            <svg class="separator" viewBox="0 0 2 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 60L1 56" stroke="#ECF7FF" stroke-width="0.5"/>
              <path d="M1 54V6" stroke="#ECF7FF" stroke-width="0.5" stroke-dasharray="0.5 2"/>
              <path d="M1 4L1 -4.09782e-08" stroke="#ECF7FF" stroke-width="0.5"/>
            </svg>
            <div class="song-equalizer">
              <p>artman main theme</p>
              <div class="time">
                <span>{{ formatTime(currentTime) }} </span>
                /
                <span> {{ formatTime(fullTime) }}</span>
              </div>
              <div class="equalizer">
                <img class="" src="@/assets/image/main/equalizer.png" alt="equalizer">
              </div>
            </div>
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
        <div :class="`main-content__right ${isLoaded ? 'right-animation' : ''}`">
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
  @media (min-width:1024px) {
    height: 100vh;
  }

  &-content {
    display: flex;
    align-items: center;
    height: 100%;
    z-index: 1;
    &__left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .song {
        display: flex;
        align-items: center;
        margin: 40px 0 56px;
        height: 90px;
        .play-button {
          background: transparent;
          border: none;
          cursor: pointer;
          span {
            img {
              width: 80px;
              height: 80px;
              transition: all .6s;
              &:last-child {
                opacity: 0;
                z-index: -1;
                position: absolute;
                left: 0;
              }
            }
          }
          &:hover {
            span {
              img {
                &:last-child {
                  opacity: 1;
                  z-index: 2;
                }
              }
            }
          }
        }
        .song-time {
          display: none;
        }
        .time {
          font-size: 12px;
          line-height: 15px;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          span {
            width: 40px;
            &:last-child {
              text-align: right;
            }
          }
        }
        .song-equalizer {
          &>p {
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 4.8px;
            text-transform: uppercase;
            opacity: .7;
            margin-bottom: 5px;
          }
        }
        .separator {
          margin: 0 24px;
          height: 60px;
          width: 9px;
        }
        @media (min-width:720px) {
          .song-time {
            display: flex;
            letter-spacing: 1.7px;
            font-size: 17px;
            line-height: 15px;
            span {
              width: 52px;
            }
          }
          .time {
            display: none;
          }
          .song-equalizer {
            max-width: 375px;
            &>p {
              font-size: 14px;
              margin-bottom: 0;
            }
          }
        }
      }
      .store {
        @media (min-width:1024px) {
          display: none;
        }
      }
      @media (min-width:1024px) {
        justify-content: center;
        transition: 3s;
        transform: translateX(-150%);
        opacity: 0;
      }
    }
    &__right {
      display: none;
      @media (min-width:1024px) {
        display: block;
        margin-bottom: 20px;
        transition: 3s;
        transform: translateX(150%);
        opacity: 0;
        .phone {
          display: flex;
          flex-direction: column;
          align-items: center;
          .phone-circle {
            width: 400px;
            height: 400px;
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
            width: 230px;
            margin-bottom: 40px;
          }
        }
      }
      @media (min-width:1280px) {
        right: 30px;
        .phone {
          .phone-circle {
            width: 430px;
            height: 430px;
          }
          .image {
            width: 260px;
          }
        }
      }
      @media (min-width:1440px) {
        right: 40px;
      }
      @media (min-width:1680px) {
        left: 20px;
        .phone {
          .phone-circle {
            width: 488px;
            height: 488px;
          }
          .image {
            width: 326px;
            height: 670px;
          }
        }
      }
      @media (min-width:1920px) {
        right: 0;
        left: 60px;
      }
    }
    @media (min-width:1024px) {
      justify-content: space-around;
      margin-top: 60px;
    }
  }
}
</style>