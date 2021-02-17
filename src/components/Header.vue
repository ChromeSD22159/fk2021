<template>
  <div class="site-header">
    <header
      v-bind:class="updateScroll() > 40 ? 'header-sticky' : false"
      class="sticky top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto bg-white flex items-center justify-between"
    >
      <div class="pl-4 w-1/2 md:w-60 xl:w-72">
        <router-link to="/">
          <img :src="require(`@/assets/images/frederikkohler_logo.svg`)" />
        </router-link>
      </div>

      <div class="pr-4 w-1/2 md:w-60 xl:w-72 flex justify-end">
        <div class="icon-background p-2 m-2">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
            ></path>
          </svg>
        </div>
        <div class="icon-background p-2 m-2" v-on:click="toogleNav">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
    <transition name="fade">
      <MobilNavModal
        :routes="routes"
        v-show="MobileNav"
        @CloseNav="toogleNav"
      />
    </transition>
  </div>
</template>

<script>
import Logo from '@/assets/images/frederikkohler_logo.svg'
import MobilNavModal from '@/components/MobilNavModal.vue'

export default {
  components: {
    MobilNavModal,
  },
  data: function () {
    return {
      scrollPosition: '',
      MobileNav: false,
      routes: [
        { name: 'Home', url: '' },
        { name: 'Über mich', url: 'about' },
        { name: 'Contact', url: 'contact' },
      ],
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
      return this.scrollPosition
    },
    toogleNav: function () {
      this.MobileNav = !this.MobileNav
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
  },
}
</script>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  height: 68px;
  width: 100%;
  background: rgba(27, 36, 51, 0);
  transition: 0.3s ease all;
  color: #fff;
}
header.header-sticky {
  background: rgba(27, 36, 51, 1);
}
.icon-background {
  background: rgba(133, 178, 255, 0.1);
  border: 1px solid rgba(255, 150, 57, 0.5);
  border-radius: 100%;
}
</style>
