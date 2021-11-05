<template>
  <div class="smartphones">
    <div v-for="(smartphone, idx) in smartphones" :key="idx">
      <SmartphonesBlock :smartphone="smartphone"/>
    </div>
  </div>

</template>

<script>
  import { defineComponent } from "vue";
  import SmartphonesBlock from "./SmartphonesBlock";
  export default defineComponent({
    name: "SmartphonesList",
    components:{
      SmartphonesBlock
    },
    created() {
      this.$store.dispatch("smartphones/getSmartphones");
    },
    computed: {
      smartphones() {
        return this.$store.getters["smartphones/smartphonesGetter"].smartphones;
      },
    },
  });
</script>

<style scoped></style>
