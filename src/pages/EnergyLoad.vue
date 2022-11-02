<script setup lang="ts">
import EnergyLoadChart from "@/components/EnergyLoadChart.vue";
import EnergyLoadTable from "@/components/EnergyLoadTable.vue";
import flipTable from "@/utils/flipTable";
import loadData from "../data/loadData";

const res = loadData();

const { head, data } = res;
const dataByColumn = flipTable(data);
</script>

<template>
  <section>
    <EnergyLoadChart
      :columns="dataByColumn.slice(1)"
      :labels="head.slice(1)"
      :time-stops="dataByColumn[0]"
    />
    <EnergyLoadTable />
  </section>
</template>
