<script setup>

</script>

<template>
  <section class="about ">
    <div class="about-image">
      <img src="@/assets/image/about/mobileArtman.webp" alt="artman">
      <img src="@/assets/image/about/deskArtman.webp" alt="artman">
      <img class="circles" src="@/assets/image/circlesAbout.svg" alt="circles">
    </div>
    <div class="about-wrapper container">
      <div class="content left-bar-animation">
        <MainTextComponent>
          <template v-slot:image>
              <img class="a-symbol" src="@/assets/image/eSymbol.svg" alt="e">
            </template>
          <template v-slot:undertitle>
            {{ $t("about_undertitle") }}
          </template>
          <template v-slot:title >
            {{ $t("about_title") }}
            <span class="text-base">{{ $t("about_title_bold") }}</span> <br>
            <span class="text-base">{{ $t("about_title_bold_2") }}</span>
            <span class="text-base">{{ $t("about_title_bold_3") }}</span><br>
            {{ $t("about_title_2") }}
            <span class="text-base">{{ $t("about_title_bold_4") }}</span>
          </template>
          <template v-slot:subtitle >
            {{ $t("about_subtitle") }}
          </template>
        </MainTextComponent>
        <div class="download-button">
          <a href="#">
            <span>{{ $t("download") }}</span>
            <img src="@/assets/image/about/download.svg" alt="about artman">
            <img src="@/assets/image/about/downloadHover.svg" alt="about artman">
          </a>
        </div>
      </div>
      <div class="phone right-bar-animation">
        <div class="image">
          <img src="@/assets/image/about/aboutPhone.webp" alt="about artman">
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about {
  &-image {
    position: absolute;
    width: 100vw;
    height: 100vh;
    right: 0;
    img {
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
    justify-content: center;
    height: 100%;
    .content {
      .download-button {
        margin-top: 40px;
        a {
          height: 40px;
          width: 340px;
          display: block;
          span {
            color: #ECF7FF;
            font-size: 19px;
            font-weight: 600;
            line-height: 20px;
            letter-spacing: 3.8px;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
          }
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
      left: 60px;
      // &>img {
      //   width: 400px;
      //   height: 400px;
      //   position: absolute;
      //   top: 50%;
      //   left: 50%;
      //   margin-right: -50%;
      //   transform: translate(-50%, -50%)
      // }
      .image {
        width: 260px;
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
    @media (min-width:1280px) {
      .phone {
      .image {
        width: 380px;
      }
    }

    }
    @media (min-width:1640px) {
      .phone {
      //   &>img {
      //   width: 488px;
      //   height: 488px;
      // }
      .image {
        width: 488px;
        height: 670px;
      }
      }

    }
  }
}
</style>