<template>
  <div class="container">
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="width: 100%">
        <q-input bottom-slots v-model="title" label="Title" :dense="dense">
          <template v-slot:append>
            <q-icon name="close" @click="title = ''" class="cursor-pointer" />
          </template>
        </q-input>
        <q-input
          bottom-slots
          v-model="price"
          type="number"
          label="Price"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon name="close" @click="price = 0" class="cursor-pointer" />
          </template>
        </q-input>

        <q-input
          bottom-slots
          v-model="image"
          type="text"
          label="Image"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon name="close" @click="image = ''" class="cursor-pointer" />
          </template>
        </q-input>

        <q-input
          bottom-slots
          v-model="description"
          type="text"
          label="Description"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon
              name="close"
              @click="description = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>

        <q-input
          bottom-slots
          v-model="detailedInfo"
          type="text"
          label="Detailed Info"
          :dense="dense"
        >
          <template v-slot:append>
            <q-icon
              name="close"
              @click="detailedInfo = ''"
              class="cursor-pointer"
            />
          </template>
        </q-input>
      </div>
      <q-btn label="Отправить" type="submit" @click="submit" color="primary" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      dense: ref(false),
    };
  },
  data() {
    return {
      title: "",
      price: 0,
      image: "",
      description: "",
      detailedInfo: "",
    };
  },
  methods: {
    submit() {
      const smartPhoneData = {
        title: this.title,
        price: this.price,
        image: this.image,
        description: this.description,
        detailedInfo: this.detailedInfo,
      };
      this.title = "";
      this.price = 0;
      this.image = "";
      this.description = "";
      this.detailedInfo = "";
      this.$store.dispatch("smartphones/addSmartphone", smartPhoneData);
    },
  },
  unmounted() {
    this.$store.dispatch("smartphones/getSmartphones");
  },
});
</script>

<style></style>
