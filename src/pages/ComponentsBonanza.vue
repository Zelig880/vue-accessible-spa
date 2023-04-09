<script setup>
import { ref } from 'vue';

const list = ref([
  { id: 0, title: "Expanded", text: "Elements such as this one, require an `aria-expanded` property to be set" },
  { id: 1, title: "Dialog and sidebar", text: "Sidebars and dialog need to `trap` the focus. This can easily be done with plugin such as `vue-focus-trap`" },
  { id: 2, title: "Forms", text: "Even if Vue allows us to quickly reproduce Form like behaviour, we should always include a fully semanthical form in our components" },
  { id: 3, title: "No Aria is better than bad Aria", text: "You have probably heard this quote before, but it is important to emphasise on this! the wrong aria role can be more harm than no role at all." },
  { id: 4, title: "Trusted resources", text: "When developing new components, you should rely on good sources. For accessibility purposes I always use the W3 website and the Mozilla ones (both in the reference slide)" },
  { id: 4, title: "Add accessibility in your process", text: "Having accessibiliuty as part of your process will greatly help you improve your skills and make accessible applications." }
])
const openedItem = ref( 1 );
</script>

<template>
  <h1>Top 5 mistakes when developing SPA</h1>
  <template 
    v-for="{ id, title, text } in list"
    :key="id"
  >
    <h3>
      <button
        :id="id + '-header'"
        :aria-controls="id + '-panel'"
        :aria-expanded="openedItem === id"
        @click="openedItem = id"
      >
        {{ title }}
      </button>
    </h3>
    <section
      v-show="openedItem === id"
      :id="id + '-panel'"
      :aria-labelledby="id + '-header'"
    >
      {{ text }}
    </section>
  </template>
</template>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  background-color: antiquewhite;
  opacity: 0.5;
}
</style>
