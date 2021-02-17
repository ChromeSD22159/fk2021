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
      class="w-10/12 bg-transparent md:max-w-screen-md mx-auto py-16 -mt-2 sm:mt-40 rounded-md"
    >
      <div class="flex flex-col sm:flex-row">
        <div class="pb-4 sm:pb-0 sm:w-1/2 flex flex-col justify-center">
          <transition name="slide-fade" mode="out-in">
            <h2 class="words pb-5 sm:pb-0" :key="word">{{ word }}!</h2>
          </transition>
          <p class="pb-4">
            Seit seit über 10 Jahren beschäftige ich mich mit digitalen Medien,
            seit 2019 bin ich Mediengestalter Digital & Print. Ich befasste mich
            in Hamburg von 2018-2020 überwiegend mit der Entwicklung von
            WordPress-Webseiten, Gestaltung. Die moderne Front-End-Entwicklung
            reizte so sehr, das ich in meiner Freizeit nicht die Finger davon
            lassen konnte.
          </p>
          <p>
            Das Leben als Entwickler oder UI Designer ist für mich ein Traum,
            weshalb ich mich dazu entschied, Laravel und Vue.js zulernen um
            meinen selbst weiterzubilden. Daher bin ich auf der suche nach einer
            neuen Herausforderung als Entwickler!
          </p>
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
