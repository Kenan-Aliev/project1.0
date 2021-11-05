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
        <router-link to="/add" class="header__main-links-item">
          Добавить новый смартфон
        </router-link>
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
          <a target="_blank" :href="asus">
            <img src="../assets/3c28ddf1e910fe3e061998941dc6d063.svg" alt="">
          </a>

          <a target="_blank" :href="msi">
            <img src="../assets/462ce9801310ccefb151e0706542087a.svg" alt="">
          </a>
        </div>
        <div class="partners__icons">
          <a target="_blank" :href="nvidia">
            <img src="../assets/dc28bcacc7a63c2801ffdcfdbf7e6921.svg" alt="">
          </a>

          <a target="_blank" :href="amd">
            <img src="../assets/logo_white.svg" alt="">
          </a>
        </div>
        <div class="partners__icons">
          <a target="_blank" :href="corsair">
            <img src="../assets/corsair.svg" alt="">
          </a>

          <a target="_blank" :href="nzxt">
            <img src="../assets/nzxt.svg" alt="">
          </a>
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
        vk: 'https://vk.com/id431002316',
        asus: 'https://www.asus.com/ru/',
        msi: 'https://ru.msi.com/',
        nvidia: 'https://www.nvidia.com/ru-ru/',
        amd: 'https://www.amd.com/en/support',
        corsair: 'https://www.corsair.com/ru/ru/',
        nzxt: 'https://nzxt.com/'
      }
    }
  })
</script>

<style scoped>

</style>
