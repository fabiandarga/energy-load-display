<script setup lang="ts">
import flipTable from "@/utils/flipTable";
import loadData from "../data/loadData";

const res = loadData();

const { head, data } = res;
const dataByColumn = flipTable(data).slice(1);
</script>

<template>
  <div class="energyLoadTable">
    <div
      v-for="(title, index) in head.slice(1)"
      :key="title"
      class="energyLoadTableRow"
    >
      <div
        v-for="load in dataByColumn[index]"
        :key="load"
        :class="{
          negative: load < 0,
          solarLoad: title === 'Solar Panels' && load > 0,
        }"
      >
        {{ load }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.energyLoadTableRow {
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
}
.energyLoadTableRow div {
  text-align: end;
}

.energyLoadTableRow:nth-child(1) {
  background: #a108a144;
}
.energyLoadTableRow:nth-child(2) {
  background: #c9ecac80;
}
.energyLoadTableRow:nth-child(3) {
  background: #f2bf2744;
}
.energyLoadTableRow:nth-child(4) {
  background: #5ac1ff44;
}
.energyLoadTableRow div.negative {
  background: #b0352ec7;
}
.energyLoadTableRow div.solarLoad {
  background: #b99016b6;
}
.energyLoadTableRow:last-child div {
  font-weight: bold;
}
</style>
