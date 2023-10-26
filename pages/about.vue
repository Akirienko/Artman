<template>
  <section class="about">
    <div class="about-image">
      <img src="@/assets/image/about/mobileArtman.webp" alt="artman">
      <img src="@/assets/image/about/deskArtman.webp" alt="artman">
    </div>
    <div class="about-wrapper container">
      <div class="content">
        <MainTextComponent>
          <template v-slot:undertitle>
            {{ $t("about_undertitle") }}
          </template>
          <template v-slot:title >
            <!-- <span class="text-base">write</span> your own <br>
            movie-making <span class="text-base">story</span><br>
            <span class="text-base">beyond time</span> and epoch<br> -->
            {{ $t("about_title") }}
          </template>
          <template v-slot:subtitle >
            {{ $t("about_subtitle") }}
          </template>
        </MainTextComponent>
        <div class="download-button">
          <a href="#">
            <img src="@/assets/image/about/downloadStore.svg" alt="about artman">
            <img src="@/assets/image/about/hoverDownload.svg" alt="about artman">
          </a>
        </div>
      </div>
      <div class="phone">
        <img src="@/assets/image/about/circleBackground2.svg" alt="about artman">

        <div class="image">
          <img src="@/assets/image/about/aboutPhone.webp" alt="about artman">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.about {
  height: calc(100vh - 60px);
  &-image {
    position: absolute;
    width: 100vw;
    height: 100vh;
    right: 0;
    img {
      // object-fit: contain;
      // object-position: right;
      &:last-child {
        display: none;
      }
    }
    @media (min-width:1024px) {
      img {
        object-fit: cover;
        &:first-child {
          display: none;
        }
        &:last-child {
          display: block;
        }
      }
    }
  }
  &-wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    // width: 100%;
    .content {
      .download-button {
        margin-top: 40px;
        a {
          height: 40px;
          width: 340px;
          display: block;
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            transition: ease-out .5s;
            &:last-child {
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
      }
    }
    .phone {
      display: none;
      &>img {
        width: 488px;
        height: 488px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
      }
      .image {
        width: 326px;
        height: 672px;
      }
    }
    @media (min-width:1024px) {
      justify-content: space-around;
      .content {
        order: 2;
      }
      .phone {
        display: block;
        margin-right: 240px;
        order: 1;
      }

    }
  }
}
</style>