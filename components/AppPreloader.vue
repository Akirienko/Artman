<template>
  <div class="page-loader" >
    <p>A ROLANDO AGUILLON’S GAME</p>
    <div class="page-loader__background">
      <img src="@/assets/image/preloader/leftFace.png" alt="preloader artman">
      <img src="@/assets/image/preloader/rightFace.png" alt="preloader artman">
    </div>
    <img class="preloader-logo" src="@/assets/image/preloadingLogo.svg" alt="preloader svg">
    <div class="page-loader__loading">
      <p>Loading</p>
      <img src="@/assets/image/headerLine.svg" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .page-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, #171A22 0%, #171A22 100%), #FFF;
    z-index: 999;
    p {
      font-size: 10px;
      font-weight: 600;
      line-height: 140%;
      letter-spacing: 10px;
      position: absolute;
      top: 10px;
      opacity: .66;
      @media (min-width: 1024px) {
        font-size: 14px;
        letter-spacing: 14px;
      }
    }
    &__loading {
      position: absolute;
      bottom: 20px;
      width: 100%;
      min-height: 60px;
      display: flex;
      justify-content: center;
      overflow: hidden;
      p {
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 5.6px;
        text-transform: uppercase;
      }
      img {
        position: absolute;
        width: 100%;
        object-fit: contain;
        bottom: 0;
        height: 16px;
        animation: 1s linear 0s infinite alternate bounce;
      }
    }
    &__background {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        position: absolute;
        height: 500px;
        object-fit: contain;
        width: auto;
        top: 0;
        @media (min-width: 1024px) {
          height: 90vh;
        }
        &:first-child {
          left: 0;
        }
        &:last-child {
          right: 0;
        }
      }
    }
    .preloader-logo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      object-fit: contain;
      width: 90vw;
      height: auto;
      animation: opacity 2s linear;
      max-width: 700px;
    }
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes bounce {
    from {
      transform: translateX(-50px);
    }
    to {
      transform: translateX(50px);
    }
  }

</style>