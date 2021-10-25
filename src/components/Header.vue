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
          </div>
        </div>
    </div>

</template>

<script>
  import {defineComponent} from 'vue'


    export default defineComponent({
        name: "Header",

    })
</script>

<style scoped>

</style>
