<template>
  <Line :chartData="chartData" :height="120" :chart-options="options" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { Tuple } from "@/types/Table";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);

const props = defineProps(["labels", "columns", "timeStops"]);

// Hardcoded for now
const colors = ["#a108a1", "#c9ecac", "#f2bf27", "#5ac1ff"];

const chartData = computed(() => {
  return {
    labels: props.timeStops,
    datasets: props.columns.map((column: Tuple, index: number) => ({
      label: props.labels[index],
      backgroundColor: (pointData: any) => {
        if (index === 1) {
          // warning color for charging batteries
          if (pointData.raw < 0) {
            return "#ff0000";
          }
          if (pointData.raw > 0) {
            // color for using batteries
            return "#4bbb33";
          }
        }
        // default color
        return "#ffffff";
      },
      borderColor: colors[index],
      data: column,
    })),
  };
});

const options = {
  plugins: {
    legend: {
      onClick: function () {},
    },
  },
};
</script>

<style></style>
