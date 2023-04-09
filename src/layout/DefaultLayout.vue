<script setup></script>

<template>
  <VueAnnouncer />
  <VueSkipTo
    ref="skipLink"
    to="#main"
    label="Skip to main content"
  />
  <main id="main">
    <router-view />
  </main>
</template>