<template>
  <div class="mainlist">
    <div class="list">
      <div class="list-title">
        {{ smartphone.title }}
        <div class="list-description">
          {{ smartphone.description }}
          <div class="list-lox">
            <div class="list-btn-buy">
              <p class="list-btn-buy-p">КУПИТЬ</p>
            </div>
            <div class="list-lox-price">
              <p>78999 <img class="list-btn-buy-img" src="../assets/rub.svg" alt=""></p>
            </div>
          </div>
          <div class="list-description-info">
            <p style="color: #a7e200; font-size:20px">ИНФОРМАЦИЯ</p>
            {{ smartphone.detailedInfo }}
          </div>
        </div>
      </div>
      <div class="list-image">
        <img :src="smartphone.image" alt="">
      </div>
    </div>

  </div>
</template>

<script>
  import {defineComponent} from "vue";
  import {ref} from 'vue'

  export default defineComponent({
    name: "Smartphone",
    setup() {
      return {
        expanded: ref(false),
      }
    },
    computed: {
      smartphone() {
        return this.$store.getters[
          "smartphones/smartphonesGetter"
          ].smartphones?.find((smartphone) => {
          return smartphone._id === this.$route.params.id;
        });
      },
    },
  });
</script>

<style>
  .q-pa-md {
    padding: 0;
  }

  .my-card {
    width: 100%;
    max-width: 550px;
  }
</style>
