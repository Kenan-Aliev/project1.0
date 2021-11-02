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
      <a target="_blank" :href="vk">
        <img src="../assets/1024px-Font_Awesome_5_brands_vk.svg.png" alt="">
      </a>
      <span class="footer__PS">© 2021</span>
      <a target="_blank" :href="discord">
        <img src="../assets/4865592.png" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'

    export default defineComponent({
        name: "Header",
      data(){
          return{
            discord:'https://discord.gg/KyeG8SdgFh',
            vk:'https://vk.com/id431002316'
          }
      }
    })
</script>

<style scoped>

</style>
