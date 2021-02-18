<template>
  <div>
    <Header />
    <div
      class="hero flex justify-center items-center flex-column"
      :style="{
        background:
          'linear-gradient(180deg, rgba(26,36,51,.5) 25%,rgba(26,36,51,0.1) 50%, rgba(26,36,51,1) 100%), url(' +
          require('@/assets/images/frederikkohler_hero.jpg') +
          ')',
      }"
    >
      <h2 class="hero">
        Frontent-Entwickler
        <br />
        & Mediengestalter
      </h2>
    </div>
    <section
      class="w-full sm:10/12 bg-transparent md:max-w-screen-md mx-auto py-16 -mt-2 sm:mt-40 rounded-md"
    >
      <splide :options="options">
        <splide-slide>
          <img :src="require('@/assets/images/frederikkohler_flyer.jpg')" />
        </splide-slide>
        <splide-slide>
          <img :src="require('@/assets/images/frederikkohler_flyer_kf.jpg')" />
        </splide-slide>
        <splide-slide>
          <img
            :src="require('@/assets/images/frederikkohler_dilara_logo.jpg')"
          />
        </splide-slide>
        <splide-slide>
          <img
            :src="require('@/assets/images/frederikkohler_goldschaetzchen.jpg')"
          />
        </splide-slide>

        <splide-slide>
          <img
            :src="
              require('@/assets/images/frederikkohler_goldschaetzchen2.jpg')
            "
          />
        </splide-slide>
        <splide-slide>
          <img
            :src="require('@/assets/images/frederikkohler_print_skills.jpg')"
          />
        </splide-slide>
      </splide>
    </section>
    <section
      class="w-10/12 bg-transparent md:max-w-screen-md mx-auto pb-16 -mt-2 sm:mt-0 rounded-md"
    >
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-full flex flex-col p-4">
          <h2 class="dark pb-4">
            Meine Print Expertice!
          </h2>

          <sequential-entrance
            fromLeft
            tag="div"
            delay="550"
            class="w-full pr-0 sm:pr-4"
          >
            <Skills name="Adobe Photoshop" stars="4" />
            <Skills name="Adobe InDesign" stars="4" />
            <Skills name="Adobe Illustrator" stars="3" />
            <Skills name="Affinity Designer" stars="5" />
            <Skills name="Affinity Photo" stars="3" />
            <Skills name="Affinity Publisher" stars="5" />
          </sequential-entrance>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Skills from '@/components/Skills.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import '@splidejs/splide/dist/css/themes/splide-default.min.css'
// or
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css'
// or
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css'

export default {
  name: 'Print',
  components: {
    Header,
    Footer,
    Skills,
    Splide,
    SplideSlide,
  },
  data: function () {
    return {
      word: 'hey',
      options: {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        breakpoints: {
          640: {
            perPage: 1,
          },
        },
        autoplay: true,
      },
    }
  },
}
</script>

<style scoped>
#splide01 ul li.splide__slide {
  padding: 1em;
}

svg {
  fill: red !important;
}

.splide__slide img {
  border-radius: 5%;
}
</style>
