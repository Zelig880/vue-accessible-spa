<script setup>
</script>

<template>
  <article>
    <h1>Let's make our VueJs Single Page Application accessible</h1>
    <h2>Page Navigation</h2>
    <router-link to="/">
      Back
    </router-link>
  </article>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
