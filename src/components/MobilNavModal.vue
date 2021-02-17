<template>
  <div class="site-modal">
    <!-- Header -->
    <div
      class="mobil-header top-0 z-40 lg:z-50 w-full max-w-8xl mx-auto flex items-center justify-between"
    >
      <div class="pl-4 w-1/2 md:w-60 xl:w-72">
        <img :src="require(`@/assets/images/frederikkohler_logo.svg`)" />
      </div>

      <div class="pr-4 w-1/2 md:w-60 xl:w-72 flex justify-end">
        <!-- Contact Link -->
        <div class="icon-background p-2 m-2">
          <router-link :to="'/contact'">
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
          </router-link>
        </div>

        <!-- BurgerMenu link -->
        <div class="icon-background p-2 m-2" @click="CloseNav">
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <!-- Menu -->
    <div class="burger-menu">
      <ul>
        <li
          v-for="route in routes"
          v-bind:key="route.name"
          v-on:click="CloseNav"
          class="p-2 text-white"
        >
          <router-link :to="'/' + route.url">{{ (route.name) }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      NavActive: true,
      Contact: false,
    }
  },
  props: {
    routes: Array,
  },
  methods: {
    CloseNav: function () {
      this.$emit('CloseNav')
    },
  },
}
</script>

<style scoped>
.site-modal {
  background: rgb(26, 36, 51);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.mobil-header {
  height: 68px;
}
.icon-background {
  color: #fff;
  background: rgba(133, 178, 255, 0.1);
  border: 1px solid rgba(255, 150, 57, 0.5);
  border-radius: 100%;
}
.burger-menu {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
li {
  font-weight: bold;
}
</style>
