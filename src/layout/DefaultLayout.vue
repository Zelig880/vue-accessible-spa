<script setup></script>

<template>
  <VueAnnouncer />
  <nav>
    <a href="/fake">Fake entry 1</a>
    <a href="/fake">Fake entry 2</a>
    <a href="/fake">Fake entry 3</a>
    <a href="/fake">Fake entry 4</a>
  </nav>
  <main id="main">
    <router-view />
  </main>
</template>

<style>
nav * {
  margin-right: 15px;
  color: white;
  text-decoration: underline;;
}
</style>