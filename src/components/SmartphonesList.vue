<template>
  <div class="smartphonesList">
    <div class="smartphones">
      <div v-for="(smartphone, idx) in getPageSmartphones" :key="idx">
        <SmartPhoneBlock :smartphone="smartphone" />
      </div>
    </div>
    <div class="pagination">
      <q-btn
        v-for="page in pagesCount"
        :key="page"
        class="page"
        :text-color="currentPage === page ? 'white' : 'black'"
        :color="currentPage === page ? 'primary' : 'standard'"
        :label="page"
        @click="changePage(page)"
      />
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
  data() {
    return {
      pagesCount: 0,
      currentPage: 1
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
  },
  computed: {
    smartphones() {
      return this.$store.getters["smartphones/smartphonesGetter"];
    },
    getPageSmartphones() {
      return this.$store.getters[
        "smartphones/smartphonesGetter"
      ]?.slice(this.currentPage * 3 - 3, this.currentPage * 3);
    },
  },
  watch: {
    smartphones: function () {
      this.pagesCount = Math.ceil(this.smartphones.length / 3);
    },
  },
});
</script>

<style scoped></style>
