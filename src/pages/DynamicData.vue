<script setup>
import { ref } from 'vue';
import { useAnnouncer } from '@vue-a11y/announcer'

const dynamicNames = ref([]);
const loading = ref(0);
const { polite } = useAnnouncer()

const loadData = () => {
  if ( loading.value === 100 ) {
    setNames()
  } else {
    loading.value += 25;
    polite( `Loading at ${loading.value}%` )
    setTimeout( loadData, 2000 )
  }
}

const setNames = () => {
  dynamicNames.value = [
    "simone",
    "zelig",
  ]
  polite( 'List of names loaded')
}
</script>

<template>
  <article>
    <h1>Let's make our VueJs Single Page Application accessible</h1>
    <h2 for="names">
      Dynamic Names
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
