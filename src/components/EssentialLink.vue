<template>
  <div>
    <h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum explicabo libero sint sunt veritatis voluptates! Accusamus ad amet aut beatae consequatur cumque deleniti earum ex expedita harum hic, illo itaque iure maiores minima minus nam neque nesciunt numquam pariatur praesentium quas saepe sequi suscipit tenetur ut voluptas voluptate. Accusantium beatae commodi deserunt dicta earum esse expedita, explicabo fugit hic impedit ipsa iste iusto, modi nam necessitatibus nihil nobis pariatur quaerat quas quasi quis ratione recusandae saepe sequi sit temporibus ut voluptatem? Accusamus aliquam amet at atque deleniti dicta dolore dolorem ea eius eligendi eos eum eveniet harum impedit in incidunt ipsa labore laborum magni molestiae, necessitatibus nisi, nobis nulla omnis quaerat quasi quibusdam, quidem sapiente sed tempora unde vel veniam voluptatum. Ad adipisci autem blanditiis commodi deserunt doloribus, et eum expedita id illum impedit ipsa iste itaque magnam necessitatibus nemo nihil officiis optio voluptas voluptate. Asperiores excepturi fuga illo.
    </h1>
  </div>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
})
</script>
