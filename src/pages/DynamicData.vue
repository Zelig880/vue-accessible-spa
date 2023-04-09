<script setup>
import { ref } from 'vue';

const dynamicNames = ref([]);
const loading = ref(0);

// Fake async loader
const loadData = () => {
  if ( loading.value !== 100 ) {
    loading.value += 25;
    setTimeout( loadData, 1000 )
  } else {
    setNames()
  }
}

const setNames = () => {
  dynamicNames.value = [
    "John",
    "George",
    "Simone",
    "Zelig880"
  ]
}
</script>

<template>
  <article>
    <h1>Let's make our VueJs Single Page Application accessible</h1>
    <h2 for="names">
      Dynamic data loading
    </h2>
    <progress
      id="names"
      :value="loading"
      max="100"
    >
      {{ loading }}%
    </progress>
    <button @click="loadData">
      Load Data
    </button>
    <section>
      <ul>
        <li
          v-for="name in dynamicNames"
          :key="name"
        >
          {{ name }}
        </li>
      </ul>
    </section>
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
progress {
  display: block;
  margin: 0 auto;
  margin-bottom: 15px;;
}
ul {
  width: 300px;
  margin: 15px auto;
}
</style>
