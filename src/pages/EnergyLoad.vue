<script setup lang="ts">
import EnergyLoadChart from "@/components/EnergyLoadChart.vue";
import EnergyLoadTable from "@/components/EnergyLoadTable.vue";
import EnergyLoadTableHead from "@/components/EnergyLoadTableHead.vue";
import flipTable from "@/utils/flipTable";
import loadData from "../data/loadData";

const res = loadData();

const { head, data } = res;
const dataByColumn = flipTable(data);
</script>

<template>
  <section class="energyLoad">
    <EnergyLoadChart
      class="chart"
      :columns="dataByColumn.slice(1)"
      :labels="head.slice(1)"
      :time-stops="dataByColumn[0]"
    />
    <EnergyLoadTableHead class="tableHead" :labels="head.slice(1)" />
    <EnergyLoadTable class="table" />
  </section>
</template>

<style scoped>
.energyLoad {
  display: grid;
  grid-template-columns: 80px minmax(0, 100%);
  grid-template-rows: auto auto;
  width: 100%;
}
.energyLoad > * {
  min-width: 0px;
}
.chart {
  grid-row: 1;
  grid-column: 2;
}
.tableHead {
  grid-row: 2;
  grid-column: 1;
  font-size: 11px;
  line-height: 20px; 
}
.table {
  grid-row: 2;
  grid-column: 2;
  font-size: 13px;
  line-height: 20px;
  margin-left: 15px;
}
</style>
