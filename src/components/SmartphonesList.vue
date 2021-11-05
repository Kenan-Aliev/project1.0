<template>
  <div class="smartphones">
    <div v-for="(smartphone, idx) in smartphones" :key="idx">
      <SmartPhoneBlock :smartphone="smartphone" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SmartPhoneBlock from "./SmartPhoneBlock.vue";
export default defineComponent({
  name: "SmartphonesList",
  components: {
    SmartPhoneBlock,
  },

  computed: {
    smartphones() {
      return this.$store.getters["smartphones/smartphonesGetter"].smartphones;
    },
  },
});
</script>

<style scoped></style>
