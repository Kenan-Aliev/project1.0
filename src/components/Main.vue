<template>
  <div class="main">
    <div class="q-pa-md">
      <q-carousel
        style="height: 100vh"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="https://hyperpc.ru/images/product/lumen/landing_v4/hpc-lumen-plus-gaming-block_-alt.jpg" />
        <q-carousel-slide :name="2" img-src="https://hyperpc.ru/images/product/notebook/play-17/main/hyperpc-play-intro-17-block.jpg?2" />
        <q-carousel-slide :name="3" img-src="https://www.ixbt.com/img/n1/news/2021/3/4/10.03_0_large_large.jpg" />
      </q-carousel>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { ref } from 'vue'

    export default  defineComponent({
        name: "Main",
      setup () {
        return {
          slide: ref(1),
          autoplay: ref(true)
        }
      }
    })
</script>

<style scoped>
  .q-pa-md{
    padding: 0;
  }
</style>
