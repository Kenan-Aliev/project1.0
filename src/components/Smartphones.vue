<template>
    <div class="block">
       <div class="block__pic">
         <div class="q-pa-md">
           <q-carousel
             style="height: 439px"
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
             <q-carousel-slide :name="1" img-src="https://i.ytimg.com/vi/JNvfsljiuZE/maxresdefault.jpg" />
             <q-carousel-slide :name="2" img-src="https://gagadget.com/media/cache/63/cc/63cc9aa58e06f2e7a617e2509cc10fc0.jpg" />
             <q-carousel-slide :name="3" img-src="https://avatars.mds.yandex.net/get-marketcms/1779479/img-6a33c074-9035-4da3-8980-7801330353ec.jpeg/optimize" />
             <q-carousel-slide :name="4" img-src="https://megaobzor.com/uploads/stories/169559/P1068412.webp" />
           </q-carousel>
         </div>
       </div>
       <div class="block__content">
         <div class="block__content-item">
           <div class="q-pa-md row items-start q-gutter-md">
             <q-card class="my-card" flat bordered>
               <q-img
                 src="https://basetop.ru/wp-content/uploads/2021/04/zte_red_magic_6.jpg"
               />

               <q-card-section>
                 <div class="text-overline text-orange-9">Есть в наличии</div>
                 <div class="text-h5 q-mt-sm q-mb-xs">ZTE NUBIA RED MAGIC 5G (8+128) EU</div>
                 <div class="text-caption text-grey">
                   Stereo speakers DTS: X 24-bit/192kHz audio Dolby Atmos sound Active noise cancellation
                 </div>
               </q-card-section>

               <q-card-actions>
                 <q-btn flat color="dark" label="$ 619" />
                 <q-btn flat color="primary" label="Купить" />

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
                     {{ lorem }}
                   </q-card-section>
                 </div>
               </q-slide-transition>
             </q-card>
           </div>
         </div>
         <div class="block__content-item">
           <div class="q-pa-md row items-start q-gutter-md">
             <q-card class="my-card" flat bordered>
               <q-img
                 src="https://trashbox.ru/ifiles/1497641_a36d0d_asus-rog-5s-1.jpg_min1/2021-08-16-asus-rog-phone-5s-5s-pro-announced-7.jpg"
               />

               <q-card-section>
                 <div class="text-overline text-orange-9">Есть в наличии</div>
                 <div class="text-h5 q-mt-sm q-mb-xs">
                   СМАРТФОН ASUS ROG PHONE 5S PRO (18+512)</div>
                 <div class="text-caption text-grey">
                   сканер отпечатка пальцев под дисплеем, акселерометр, гироскоп, электронный компас, датчик приближения, датчик освещённости, датчик Холла, два ультразвуковых AirTriggers 3
                 </div>
               </q-card-section>

               <q-card-actions>
                 <q-btn flat color="dark" label="$ 2200" />
                 <q-btn flat color="primary" label="Купить" />

                 <q-space />

                 <q-btn
                   color="grey"
                   round
                   flat
                   dense
                   :icon="expanded2 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                   @click="expanded2 = !expanded2"
                 />
               </q-card-actions>

               <q-slide-transition>
                 <div v-show="expanded2">
                   <q-separator />
                   <q-card-section class="text-subitle2">
                     {{ lorem2 }}
                   </q-card-section>
                 </div>
               </q-slide-transition>
             </q-card>
           </div>
         </div>
         <div class="block__content-item">
           <div class="q-pa-md row items-start q-gutter-md">
             <q-card class="my-card" flat bordered>
               <q-img
                 src="https://root-nation.com/wp-content/uploads/2021/03/Black-Shark-4-Header.jpg"
               />

               <q-card-section>
                 <div class="text-overline text-orange-9">Есть в наличии</div>
                 <div class="text-h5 q-mt-sm q-mb-xs">XIAOMI BLACK SHARK 4 (8+128) EU</div>
                 <div class="text-caption text-grey">
                   Сканер отпечатков сбоку, акселлерометр, гироскоп, датчик освещения, компас, барометр
                 </div>
               </q-card-section>

               <q-card-actions>
                 <q-btn flat color="dark" label="$ 590" />
                 <q-btn flat color="primary" label="Купить" />

                 <q-space />

                 <q-btn
                   color="grey"
                   round
                   flat
                   dense
                   :icon="expanded1 ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                   @click="expanded1 = !expanded1"
                 />
               </q-card-actions>

               <q-slide-transition>
                 <div v-show="expanded1">
                   <q-separator />
                   <q-card-section class="text-subitle2">
                     {{ lorem1 }}
                   </q-card-section>
                 </div>
               </q-slide-transition>
             </q-card>
           </div>
         </div>
       </div>
      <div class="block__adver">
        <div class="q-pa-md">
          <q-parallax :height="150">
            <template v-slot:media>
              <video width="720" height="440" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
                <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
                <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4">
              </video>
            </template>

            <h3 class="text-white">Здесь может быть ваша реклама</h3>
          </q-parallax>
        </div>
      </div>


    </div>

</template>

<script>
import {defineComponent} from 'vue'
import { ref } from 'vue'
    export default defineComponent( {
        name: "Smartphones",
      setup () {
        return {
          slide: ref(1),
          autoplay: ref(true),
          expanded: ref(false),
          expanded1: ref(false),
          expanded2: ref(false),
          lorem: 'экран: 6.9″ (3088×1440) 120 Гц оперативная память: 12 ГБ память: 512 ГБ, слот для карты памяти 4 камеры: 108 МП, 12 МП, 12 МП аккумулятор: 4500 мА·ч процессор: Samsung Exynos 990 Благодаря 6,9-дюймовому Dynamic AMOLED дисплею, работающему с адаптивной частотой 120 Гц, игры, запущенные на Galaxy Note 20 Ultra, выглядят плавными и комфортными для глаз.\n' +
            '\n' +
            'Источник: https://basetop.ru/luchshie-igrovye-smartfony-2021-goda/',
          lorem1: 'Операционная система\tAndroid 11, Joy UI 12.5\n' +
            'Емкость аккум. (мА·ч)\t4500\n' +
            'Количество баллов в AnTuTu\t---\n' +
            'Материал корпуса\tСтекло, алюминий\n' +
            'РАЗМЕРЫ\n' +
            'Габариты (мм) (ширина Х высота Х толщина)\t163.8 x 76.4 x 9.9\n' +
            'Вес (г)\t210\n' +
            'ПРОЦЕССОР\n' +
            'Тип процессора\tQualcomm Snapdragon 870 5G\n' +
            'Тактовая частота (МГц)\t3200\n' +
            'Количество ядер\t8\n' +
            'ПАМЯТЬ\n' +
            'Оперативная память (Гб)\t8/12\n' +
            'Встроенная память (Гб)\t128/256\n' +
            'Поддержка Micro SD\tнет',
          lorem2: 'Защита от влаги\tнет\n' +
            'Операционная система\tAndroid 11, ROG UI\n' +
            'Емкость аккум. (мА·ч)\t6 000 Быстрая зарядка 65 Вт Реверсивная зарядка 10 Вт\n' +
            'Количество баллов в AnTuTu\t---\n' +
            'Материал корпуса\tалюминий, стекло\n' +
            'РАЗМЕРЫ\n' +
            'Габариты (мм) (ширина Х высота Х толщина)\t172.8 x 77.3 x 9.9\n' +
            'Вес (г)\t238\n' +
            'ПРОЦЕССОР\n' +
            'Охлаждение\tПродвинутая система охлаждения\n' +
            'Тип процессора\tSnapdragon 888+\n' +
            'Тактовая частота (МГц)\t2990\n' +
            'Количество ядер\t8\n' +
            'ПАМЯТЬ\n' +
            'Тип памяти\tUFS 3.1\n' +
            'Оперативная память (Гб)\t8/12/16\n' +
            'Встроенная память (Гб)\t256/512\n' +
            'Поддержка Micro SD\tНетк',
        }
      }





    })
</script>

<style scoped>

</style>
