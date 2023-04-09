<script setup>
</script>

<template>
  <article>
    <h1>Let's make our VueJs Single Page Application accessible</h1>
    <p>Sample app that showcases the downside of using SPA for accessibilities purposes.</p>
    <h2>Issues with SPA:</h2>
    <nav>
      <router-link to="/page-navigation">
        Page Navigation
      </router-link>
      <router-link to="/dynamic-data">
        Dynamic Data
      </router-link>
      <router-link to="/components-bonanza">
        Component Bonanza
      </router-link>
    </nav>
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
a {
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 4px;
  background-color: white;
  margin-right: 10px;
}
</style>
