<script setup lang="ts">
import flipTable from "@/utils/flipTable";
import loadData from "../data/loadData";

const res = loadData();

const { head, data } = res;
const dataByColumn = flipTable(data);
</script>

<template>
  <table class="energyLoadTable">
    <tr v-for="(title, index) in head" :key="title">
      <th>{{ title }}</th>
      <td v-for="entry in dataByColumn[index]" :key="entry">{{ entry }}</td>
    </tr>
  </table>
</template>

<style scoped>
.energyLoadTable th {
  font-weight: bold;
  text-align: start;
  white-space: nowrap;
  padding: 0.1em 0;
}
.energyLoadTable td {
  text-align: end;
  padding: 0.1em 0.5em;
}
.energyLoadTable tr:last-child td {
  padding-top: 0.7em;
  font-weight: bold;
}
</style>
