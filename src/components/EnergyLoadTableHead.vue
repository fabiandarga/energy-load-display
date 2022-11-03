<script setup lang="ts">
import loadData from "../data/loadData";

const res = loadData();

const { head } = res;
</script>

<template>
  <div class="energyLoadTableHead">
    <div v-for="title in head.slice(1)" :key="title">
      {{ title }}
    </div>
  </div>
</template>

<style scoped>
.energyLoadTableHead div {
  font-weight: bold;
  text-align: start;
  white-space: nowrap;
}
</style>
