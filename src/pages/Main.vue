<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Header from "../components/Header";

export default defineComponent({
  name: "Main",
  components: { Header },
  created() {
    this.$store.dispatch("smartphones/getSmartphones");
  },
});
</script>

<style scoped></style>
