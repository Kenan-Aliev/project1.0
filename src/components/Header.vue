<template>
  <div class="header">
    <div class="header__main">
      <div class="header__icon">
        <router-link to="/">
          <img src="../assets/1493589.png" alt="">
        </router-link>
        <div class="header__icon-link">Halloween</div>
      </div>
      <div class="header__main-logo">
        <img src="../assets/138_character_pumpkin_halloween.png" alt="">
      </div>
      <div class="header__main-links">
        <router-link to="/computers" class="header__main-links-item">Компьютеры</router-link>
        <router-link to="/laptops" class="header__main-links-item">Ноутбуки</router-link>
        <router-link to="/smartphones" class="header__main-links-item">Смартфоны</router-link>
        <router-link to="/accessories" class="header__main-links-item">Аксессуары</router-link>
      </div>
    </div>
  </div>
  <div class="footer">
    <div class="footer__title">
      <span class="footer__happy">Happy Halloween</span>
    </div>
    <div class="footer__icons">
      <div class="footer__icons-icons">
        <a target="_blank" :href="vk">
          <img style="margin-left: 10px;" src="../assets/vk-ikonka1_2x.png" alt="">
        </a>
        <a target="_blank" :href="discord">
          <img style="width: 60px; height: 60px" src="../assets/white-discord-png.png" alt="">
        </a>
      </div>
      <div class="partners">
        <div class="partners__title">
          <h5>Партнеры</h5>
        </div>
        <div class="partners__icons">
            <img src="../assets/3c28ddf1e910fe3e061998941dc6d063.svg" alt="">
            <img src="../assets/462ce9801310ccefb151e0706542087a.svg" alt="">
        </div>
        <div class="partners__icons">
            <img src="../assets/dc28bcacc7a63c2801ffdcfdbf7e6921.svg" alt="">
          <img src="../assets/logo_white.svg" alt="">
        </div>
        <div class="partners__icons">
          <img src="../assets/corsair.svg" alt="">
          <img src="../assets/nzxt.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: "Header",
    data() {
      return {
        discord: 'https://discord.gg/KyeG8SdgFh',
        vk: 'https://vk.com/id431002316'
      }
    }
  })
</script>

<style scoped>

</style>
