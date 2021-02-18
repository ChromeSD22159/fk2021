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
          <img :src="require('@/assets/images/frederikkohler_dilara.jpg')" />
        </splide-slide>
        <splide-slide>
          <img
            :src="require('@/assets/images/frederikkohler_whitestars.jpg')"
          />
        </splide-slide>
        <splide-slide>
          <img :src="require('@/assets/images/frederikkohler_vue.jpg')" />
        </splide-slide>
        <splide-slide>
          <img :src="require('@/assets/images/frederikkohler_effektor.jpg')" />
        </splide-slide>
      </splide>
    </section>
    <section
      class="w-10/12 bg-transparent md:max-w-screen-md mx-auto pb-16 -mt-2 sm:mt-0 rounded-md"
    >
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-full flex flex-col p-4">
          <h2 class="dark pb-4">
            Meine Digitale Expertice!
          </h2>

          <sequential-entrance
            fromLeft
            tag="div"
            delay="350"
            class="w-full pr-0 sm:pr-4"
          >
            <Skills name="HTML" stars="5" />
            <Skills name="CSS" stars="5" />
            <Skills name="PHP" stars="4" />
            <Skills name="JavaScript" stars="4" />
            <Skills name="VUE JS" stars="3" />
            <Skills name="WordPress" stars="4" />
            <Skills name="Git" stars="2" />
            <Skills name="tailwind CSS" stars="4" />
            <Skills name="UiKit" stars="5" />
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
</style>
