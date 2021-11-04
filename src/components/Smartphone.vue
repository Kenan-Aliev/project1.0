<template>
  <div>{{ smartphone }}</div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Smartphone",
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

<style></style>
