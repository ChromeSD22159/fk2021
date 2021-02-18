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
        <div class="sm:w-1/2 flex items-center justify-center pb-4 sm:pb-0">
          <img
            :src="require(`@/assets/images/frederikkohler_portrait.png`)"
            alt="Frederik Kohler Portrait"
          />
        </div>
        <div class="sm:w-1/2 flex items-center flex-col">
          <p class="px-4 sm:px-0 sm:pr-4 pb-4">
            Ich bin
            <strong>Frederik Kohler.</strong>
            Ich komme aus
            <strong>Waldshut-Tiengen</strong>
            und bin
            <strong>Frontend-Entwickler & Mediengestalter.</strong>
          </p>
          <p class="px-4 sm:px-0 sm:pr-4 pb-4">
            Seit über 10 Jahren beschäftige ich mich mit digitalen Medien und
            seit 2019 bin ich Mediengestalter Digital & Print. Ich befasste mich
            in Hamburg von 2018-2020 überwiegend mit der Entwicklung von
            WordPress-Webseiten und der Gestaltung von crossmedialen Medien.
            Doch die moderne Front-End-Entwicklung reizte mich so sehr, das ich
            in meiner Freizeit nicht die Finger davon lassen konnte.
          </p>
          <p class="px-4 sm:px-0 sm:pr-4">
            Ein Leben als Entwickler oder UI Designer ist für mich ein Traum,
            weshalb ich mich dazu entschied, noch Laravel und Vue.js dazu
            zulernen, um mich selbst weiterzubilden. Nun bin ich auf der Suche
            nach einer neuen Herausforderung als Entwickler! Meine Kenntnisse
            auszubauen und in der Praxis weiter zu festigen!
          </p>
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
  name: 'About',
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

<style scoped></style>
