<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-img :src="smartphone.image" />

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{ smartphone.title }}</div>
        <div class="text-caption text-grey">
          {{ smartphone.description }}
        </div>
      </q-card-section>

      <q-card-actions>
        <router-link :to="smartphone._id">
          <q-btn flat color="dark" label="Подробнее" />
        </router-link>
        <q-space />

        <q-btn
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{ smartphone.detailedInfo }}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { ref } from "vue";
  export default defineComponent({
    name: "SmartphoneBlock",
    setup() {
      return {
        expanded: ref(false),
      };
    },
    props:{
      smartphone:{
        type:Object
      }
    },
  });
</script>

<style lang="sass" scoped>
  .my-card
    width: 100%
    max-width: 350px
</style>
