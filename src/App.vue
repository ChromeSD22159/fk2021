<template>
  <body id="app">
    <router-view />
  </body>
</template>

<style>
#app {
  font-family: 'Maven Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0
    env(safe-area-inset-left);
}
</style>
