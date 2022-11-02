<script setup lang="ts">
  import EnergyLoad from "./pages/EnergyLoad.vue";
</script>

<template>
  <header>
    <h1>Energy Load</h1>
  </header>

  <main>
    <EnergyLoad />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
