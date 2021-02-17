<template>
  <!-- Contct -->
  <div class="contact-modal">
    <div class="modal-inner bg-white w-9/12 sm:w-5/12 p-10 rounded-md">
      <div class="close" v-show="ContactActive" v-on:click="CloseContact">
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <h2 class="pb-4 text-center">
        Melde Dich bei mir und fals dir meine Bewerbung gefallen hat!
      </h2>
      <p class="pb-4 text-center">Ich freue mich auf eine Nachricht!</p>
      <ul class="flex justify-between flex-wrap">
        <li
          v-for="contact in contacts"
          v-bind:key="contact.name"
          class="w-1/2 sm:w-1/4 py-5 sm:py-0 px-2"
        >
          <a :href="contact.url" target="_blank" class="text-xl sm:text-sm">
            <img
              :src="require(`@/assets/images/icon-${contact.name}.svg`)"
              :alt="'icon ' + contact.name"
              height="auto"
            />
            {{ contact.name }}.
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ContactActive: true,
      contacts: [
        {
          name: 'xing',
          url: 'https://www.xing.com/profile/Frederik_Kohler2/cv',
        },
        { name: 'github', url: 'https://github.com/ChromeSD22159/fk2021' },
        { name: 'phone', url: 'tel:+41782125777' },
        { name: 'mail', url: 'mailto:info@frederikkohler.de' },
      ],
    }
  },

  methods: {
    CloseContact: function () {
      this.$emit('CloseContact')
    },
  },
}
</script>

<style scoped>
.contact-modal {
  background: rgb(0, 0, 0, 0.7);
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-inner {
  position: relative;
}
.close {
  position: absolute;
  color: rgba(255, 255, 255, 1);
  border-radius: 100%;
  top: -25px;
  right: -25px;
}
h2 {
  font-size: 1.25em;
  font-weight: bold;
}
li {
  font-weight: bold;
}
li > a {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
