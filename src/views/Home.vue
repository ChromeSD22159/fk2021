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
      class="w-10/12 md:max-w-screen-md mx-auto py-16 -mt-2 sm:mt-2 rounded-md"
    >
      <div class="flex flex-col sm:flex-row">
        <div class="sm:w-1/2 flex items-center justify-center">
          <transition name="slide-fade" mode="out-in">
            <h2 class="words pb-5 sm:pb-0" :key="word">{{ word }}!</h2>
          </transition>
        </div>
        <div class="sm:w-1/2 flex items-center justify-center">
          <img
            :src="require(`@/assets/images/frederikkohler.png`)"
            alt="Frederik Kohler Comic Art"
          />
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
const words = ['Hallo', 'Hola', 'Servus', 'Grüezi', 'Aloha', 'Hoi', 'Moin']

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
  },
  data: function () {
    return {
      word: 'hey',
    }
  },
  methods: {
    updateWord: function () {
      setInterval(() => {
        let formel = (Math.random() * (words.length + 1) * 100) / 100,
          flor = Math.floor(formel)
        this.word = words[flor]
      }, 2000)

      return
    },
  },
  mounted: function () {
    this.updateWord()
  },
}
</script>

<style scoped>
div.hero {
  min-height: 324px;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  background-position: center center !important;
  position: relative;
  z-index: 1;
}
div.hero::before {
  content: url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' viewBox='0 0 1024 141' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;'%3E%3Crect id='ArtBoard1' x='0' y='0' width='1024' height='140.512' style='fill:none;'/%3E%3CclipPath id='_clip1'%3E%3Crect id='ArtBoard11' serif:id='ArtBoard1' x='0' y='0' width='1024' height='140.512'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23_clip1)'%3E%3Cg transform='matrix(0.672226,0,0,0.301222,180.848,49.7756)'%3E%3Cpath d='M-269.029,-165.246C-269.029,-165.246 120.962,87.787 325.726,220.642C405.786,272.586 490.639,275.417 571.358,228.837C797.205,98.509 1254.27,-165.246 1254.27,-165.246L-269.029,-165.246Z' style='fill:rgb(26,36,51);stroke:transparent;'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  position: absolute;
  bottom: -49px;
  left: 0;
  right: 0;
  height: 50px;
  z-index: -1 !important;
}
section {
  position: relative;
  z-index: 5;
  background: rgba(255, 149, 57, 0.85);
}
p {
  color: #fff;
}
h2.hero {
  font-size: clamp(20px, 5vw, 40px);
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}

h2.words {
  font-size: clamp(20px, 10vw, 80px);
  font-style: italic;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(0px) scale(0.9);
  opacity: 0;
}
</style>
