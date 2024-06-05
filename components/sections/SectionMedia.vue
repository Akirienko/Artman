<script setup>
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();
const isUARoute = ref(false);

watchEffect(() => {
  if (route.path === '/ua') {
    isUARoute.value = true;
  } else {
    isUARoute.value = false;
  }
});

</script>

<template>
  <section class="media">
    <img class="media-bg mobile" src="@/assets/image/media/mediaBackgroundMobile.webp" alt="bg">
    <img class="media-bg" src="@/assets/image/media/mediaBackground.webp" alt="bg">

    <div class="media-wrapper container">
      <div class="social-media">
        <div class="social-media__mobile">
          <div class="dots">
            <img src="@/assets/image/dots.svg" alt="dots">
          </div>
          <NuxtLink target="_blank" to="#">
            <img src="@/assets/image/media/trailer.png" alt="button trailer">
          </NuxtLink>
          <NuxtLink target="_blank" to="#">
            <img src="@/assets/image/media/wallpaper.png" alt="button wallpaper">
          </NuxtLink>
          <NuxtLink target="_blank" to="#">
            <img src="@/assets/image/media/youtube.png" alt="button youtube">
          </NuxtLink>
        </div>
        <div class="social-media__desktop">
          <div class="dots">
            <img src="@/assets/image/media/dotsDesk.svg" alt="dots">
          </div>
          <NuxtLink target="_blank" to="#" class="media-block">
            <img src="@/assets/image/media/mediaButtonBlock.png" alt="button download">
            <div class="media-block__cercle">
              <img src="@/assets/image/media/downloadDesk.svg" alt="download">
              <img src="@/assets/image/media/downloadDeskHover.svg" alt="download">
            </div>
            <span>{{ t("download_wallpaper") }}</span>
          </NuxtLink>
          <NuxtLink target="_blank" to="https://www.youtube.com/watch?v=GiKZKtzfVxQ&ab_channel=RolandoAguillon" class="media-block">
            <img src="@/assets/image/media/mediaButtonBlock.png" alt="button youtube">
            <div class="media-block__cercle">
              <img src="@/assets/image/media/listen.svg" alt="download">
              <img src="@/assets/image/media/listenHover.svg" alt="download">
            </div>
            <span>{{ t("listen_youtube") }}</span>
          </NuxtLink>
          <NuxtLink to="#" target="_blank" class="media-block">
            <img src="@/assets/image/media/mediaButtonBlock.png" alt="button trailer">
            <div class="media-block__cercle">
              <img src="@/assets/image/media/play.svg" alt="download">
              <img src="@/assets/image/media/playHover.svg" alt="download">
            </div>
            <span>{{ t("gameplay_trailer") }}</span>
          </NuxtLink>
        </div>
      </div>
      <div class="contact-us">
        <div class="logo">
          <img src="@/assets/image/wayheartLogo.webp" alt="wayheart">
        </div>
        <div class="store">
          <NuxtLink to="#" target="_blank">
            <span>{{ t("app_store") }}</span>
            <img src="@/assets/image/media/appStore.svg" alt="appstore">
            <img src="@/assets/image/media/appStoreHover.svg" alt="appstore">
          </NuxtLink>
          <NuxtLink to="#" target="_blank">
            <span>{{ t("google_play") }}</span>
            <img src="@/assets/image/media/googlePlay.svg" alt="googlePlay">
            <img src="@/assets/image/media/googlePlayHover.svg" alt="googlePlay">
          </NuxtLink>
        </div>
        <div :class="`contacts ${isUARoute ? 'ua' : ''}`">
          <NuxtLink to="#" target="_blank">
            <span>{{ t("contact_us") }}</span>
            <img src="@/assets/image/media/gmail.svg" alt="gmail">
            <img src="@/assets/image/media/gmailHover.svg" alt="gmail">
          </NuxtLink>
          <NuxtLink to="#" target="_blank">
            <span>{{ t("follow_us") }}</span>
            <img src="@/assets/image/media/linkedIn.svg" alt="linkedIn">
            <img src="@/assets/image/media/linkedInHover.svg" alt="linkedIn">
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="copyright container">
      <p>
        Artman™ is a registered trademark. All rights are the property of their respective owners. Copyright © 2024
      </p>
    </div>
  </section>

</template>

<style lang="scss" scoped>
.copyright {
  display: flex;
  justify-content: center;
  text-align: center;
  @media (min-width:1024px) {
    position: absolute;
    bottom: -20px;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    opacity: .5;
    p {
      font-size: 12px;
      letter-spacing: 0.6px;
    }
  }
}
.media {
  padding: 80px 0;
  min-height: 100vh;
  .media-bg {
    display: none;
  }
  .media-bg.mobile {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }
  &-wrapper {
    .social-media {
      &__desktop {
        display: none;
      }
      &__mobile {
        margin-bottom: 45px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .dots {
          position: absolute;
          top: 30%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          width: 30px;
          height: 625px;
          display: flex;
          justify-content: center;
        }
        a {
          display: block;
          margin-bottom: 24px;
          width: 340px;
        }
      }
    }
    .contact-us {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logo {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;
        img {
          width: 190px;
        }
      }
      a {
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        margin-bottom: 16px;
        width: 340px;
        span {
          z-index: 3;
          font-size: 14px;
          font-weight: 600;
          line-height: 20px;
          letter-spacing: 2.8px;
          text-transform: uppercase;
          color: var(--Marble, #ECF7FF);
        }
        img {
          position: absolute;
          z-index: 1;
          &:last-child {
            display: none;
          }
        }
      }
    }
  }
  @media (min-width:1024px) {
    height: calc(100vh - 60px);
    padding: 0;
    .media-bg.mobile {
      display: none;
    }
    .media-bg {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
    }
    .media-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      .social-media {
        &__mobile {
          display: none;
        }
        &__desktop {
          display: flex;
          justify-content: space-between;
          margin-bottom: 150px;
          .dots {
            position: absolute;
            top: 50%;
            margin-top: -15px;
            height: 30px;
            width: 110vw;
            left: -5%;
            @media (min-width:1640px) {
              left: -15%;
            }
            @media (min-width:1920px) {
              left: -30%;
              width: 120vw;
            }
          }
          .media-block {
            display: block;
            &>img {
              width: 343px;
            }
            &__cercle {
              position: absolute;
              top: 50%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              img {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-right: -50%;
                transform: translate(-50%, -50%);
                width: 144px;
                height: 144px;
                transition: ease-out .5s;
                &:last-child {
                  z-index: 2;
                  opacity: 0;
                  width: 88px;
                  height: 88px;
                }
              }
            }
            span {
              font-size: 19px;
              font-weight: 600;
              line-height: 140%;
              letter-spacing: 2.85px;
              text-transform: uppercase;
              color: var(--Marble, #ECF7FF);
              position: absolute;
              bottom: -68px;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
            }
            &:hover {
              .media-block {
                &__cercle {
                  img {
                    &:first-child {
                      opacity: 0;
                    }
                    &:last-child {
                      opacity: 1;
                    }
                  }
                }
              }
            }
          }
          @media (min-width:1440px) {
            margin-bottom: 200px;
          }
        }
      }
      .contact-us {
        a {
        margin-bottom: 50px;
        span {
          font-size: 19px;
          letter-spacing: 3.8px;
        }
        img {
          position: absolute;
          z-index: 1;
          transition: ease-out .5s;
          &:last-child {
            display: block;
            z-index: 2;
            opacity: 0;
          }
        }
        &:hover {
          img {
            &:first-child {
              opacity: 0;
            }
            &:last-child {
              opacity: 1;
            }
          }
        }
      }
        .logo {
          position: absolute;
          top: 30%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          img {
            width: 300px;
          }
        }
        .store {
          order: 2;
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
        .contacts {
          order: 1;
          display: flex;
          justify-content: space-between;
          width: 100%;
          @media (min-width: 1024px) {
            &.ua {
              a {
                &:first-child {
                  span {
                    margin-right: 20px;
                  }
                }
                &:last-child {
                  span {
                    margin-left: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}
</style>